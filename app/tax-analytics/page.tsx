'use client';
import { useState } from 'react';
import axios from 'axios';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // Import styles for tooltips
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registering the chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function TaxAnalytics() {
  const [formData, setFormData] = useState({
    employment_income: '',
    rrsp_fhsa_deductions: '',
    capital_gains: '',
    dividend_income: '',
    other_income: '',
  });

  const [taxData, setTaxData] = useState({
    total_tax: 0,
    federal_tax: 0,
    provincial_tax: 0,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3001/tax_calculator', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setTaxData(response.data);
      } else {
        console.error('Failed to fetch tax data: ', response.status);
      }
    } catch (error) {
      console.error('Error during the request: ', error);
    }
  };

  const chartData = {
    labels: ['Federal Tax', 'Provincial Tax', 'Total Tax'],
    datasets: [
      {
        label: 'Tax Breakdown',
        data: [taxData.federal_tax, taxData.provincial_tax, taxData.total_tax],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF4561', '#47A6E3', '#FFB94D'],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between py-10 px-4 sm:px-8 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-black text-center">Tax Analytics</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
        {/* Input Form */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h1 className="text-xl font-bold mb-4">Your Info</h1>
          <div className="flex flex-col space-y-4">
            <div>
              <Tippy content="Employment income consists of amounts that you receive as salary, wages, commissions, bonuses, tips, gratuities, and honoraria. Employment income is usually shown in box 14 of your T4 slip.">
                <label className="block text-sm font-bold text-gray-700">Employment Income</label>
              </Tippy>
              <input
                type="number"
                name="employment_income"
                value={formData.employment_income}
                onChange={handleChange}
                placeholder="Enter your employment income"
                className="mt-1 block w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              />
            </div>

            <div>
              <Tippy content="A retirement savings and investment plan that individuals can open an account for and contribute to. Deductible contributions can be used to reduce your income tax. The contributions that you make to your FHSAs may be deductible on your income tax and benefit return for the year of the contribution or a future year. Over your lifetime, the most you can deduct from your income as an FHSA deduction is $40,000. Transfers that you make from your RRSPs to your FHSAs will reduce the amount that can be deducted over your lifetime.">
                <label className="block text-sm font-bold text-gray-700">RRSP and FHSA Deductions</label>
              </Tippy>
              <input
                type="number"
                name="rrsp_fhsa_deductions"
                value={formData.rrsp_fhsa_deductions}
                onChange={handleChange}
                placeholder="Enter your RRSP/FHSA deductions"
                className="mt-1 block w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              />
            </div>

            <div>
              <Tippy content="You have a capital gain when you sell, or are considered to have sold, a capital property for more than the total of its adjusted cost base and the outlays and expenses incurred to sell the property. You have a capital loss when you sell, or are considered to have sold, a capital property for less than the total of its adjusted cost base and the outlays and expenses incurred to sell the property.">
                <label className="block text-sm font-bold text-gray-700">Capital Gains (input negative for loss)</label>
              </Tippy>
              <input
                type="number"
                name="capital_gains"
                value={formData.capital_gains}
                onChange={handleChange}
                placeholder="Enter your capital gains"
                className="mt-1 block w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              />
            </div>

            <div>
              <Tippy content="Canadian-source dividends are profits that you receive from your share of the ownership in a public or private corporation. It is found on line 12000 of your return the total of the amounts shown on the following slips: boxes 32 and 50 of all T3 slips, boxes 25 and 31 of all T4PS slips, boxes 11 and 25 of all T5 slips, boxes 130 and 133 of all T5013 slips">
                <label className="block text-sm font-bold text-gray-700">Dividend Income</label>
              </Tippy>
              <input
                type="number"
                name="dividend_income"
                value={formData.dividend_income}
                onChange={handleChange}
                placeholder="Enter your dividend income"
                className="mt-1 block w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              />
            </div>

            <div>
              <Tippy content="All other income (like rental income, interest, CERB, CESB, EI, CPP, and OAS">
                <label className="block text-sm font-bold text-gray-700">Other Income</label>
              </Tippy>
              <input
                type="number"
                name="other_income"
                value={formData.other_income}
                onChange={handleChange}
                placeholder="Enter your other income"
                className="mt-1 block w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="mt-4 w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all">
              Submit
            </button>
          </div>
        </div>

        {/* Tax Display */}
        <div className="bg-yellow-100 p-6 rounded-2xl shadow-md flex flex-col items-center">
          <div className="bg-yellow-100 p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Tax Breakdown</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <p className="text-lg font-semibold text-gray-700">Total Tax</p>
                <p className="text-xl font-bold text-yellow-600">${taxData.total_tax.toFixed(2)}</p>
              </div>

              <div className="flex justify-between">
                <p className="text-lg font-semibold text-gray-700">Federal Tax</p>
                <p className="text-xl font-bold text-red-600">${taxData.federal_tax.toFixed(2)}</p>
              </div>

              <div className="flex justify-between">
                <p className="text-lg font-semibold text-gray-700">Provincial Tax</p>
                <p className="text-xl font-bold text-blue-600">${taxData.provincial_tax.toFixed(2)}</p>
              </div>
            </div>

            <p className="text-sm font-semibold text-gray-600 mt-4 text-center">
              *Note that these are estimated calculations
            </p>
          </div>

          {/* Pie Chart */}
          <div className="mt-8 w-full max-w-xs">
            <Pie data={chartData} />
          </div>
        </div>
      </div>

      {/* Optional: Add Footer */}
      <footer className="mt-8 text-center text-sm text-gray-600">&copy; 2025 Tax Analytics</footer>
    </div>
  );
}

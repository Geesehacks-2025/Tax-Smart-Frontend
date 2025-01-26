import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-row items-center justify-center h-screen bg-yellow-300">
      {/* Piggy Bank Image */}
      <div className="w-[400px] h-[400px] overflow-hidden">
        <Image
          src="/piggy-bank.png"
          alt="Piggy Bank"
          width={1000}
          height={1000}
          className="drop-shadow-lg object-cover object-center w-full h-full"
        />
      </div>

      {/* Logo */}

      {/* Buttons */}
      <div className="mt-8 flex flex-col space-y-4">
        <div style={{ width: '300px', height: '200px', overflow: 'hidden' }}>
          <Image
            src="/logo.png"
            alt="Tax Smart Logo"
            width={500}
            height={250}
            style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%' }}
          />
        </div>
        <Link
          href="/my-profile"
          className="bg-yellow-100 text-blue-700 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-yellow-200">
          My Profile
        </Link>
        <Link
          href="/tax-analytics"
          className="bg-yellow-100 text-blue-700 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-yellow-200">
          Tax Analytics
        </Link>
        <Link
          href="/tax-reminder"
          className="bg-yellow-100 text-blue-700 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-yellow-200">
          Tax Reminder
        </Link>
        <Link
          href="/my-content-studio"
          className="bg-yellow-100 text-blue-700 font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-yellow-200">
          My Content Studio
        </Link>
      </div>
    </div>
  );
}

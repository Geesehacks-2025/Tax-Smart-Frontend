import Link from 'next/link';

const SideBar = () => {
  return (
    <div className="h-screen w-60 bg-blue-900 text-white flex flex-col">
      <h1 className="text-2xl font-bold text-center py-6">TaxSmart</h1>
      <nav className="flex flex-col gap-4 px-4">
        <Link href="/profile" className="text-lg hover:text-blue-300">
          Profile
        </Link>
        <Link href="/income-tracking" className="text-lg hover:text-blue-300">
          Income Tracking
        </Link>
        <Link href="/ai-assistant" className="text-lg hover:text-blue-300">
          AI Assistant
        </Link>
      </nav>
    </div>
  );
};

export default SideBar;

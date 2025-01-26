'use client';
import Link from 'next/link';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { MenuIcon } from 'lucide-react';

const TitleBar = () => {
  const handleLogout = () => {
    // logout logic
    console.log('logout');
  };

  return (
    <nav className="z-50 w-full fixed top-0 left-0 bg-gray-50 text-black shadow-lg">
      <div className="w-full mx-auto px-4 justify-between flex">
        <div className="flex flex-start h-16">
          {/* Left - Menu Dropdown */}
          <div className="mx-2 relative flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="lg" className="px-3" variant="ghost">
                  <MenuIcon color="#043C48" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>
                  <Link href="/my-profile" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">
                    My Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/tax-analytics" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">
                    Tax Analytics
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/tax-reminder" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">
                    Tax Reminder
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="my-content-studio" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">
                    My Content Studio
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Center - Title */}
          <div className="mx-4 flex items-center">
            <h1 className="text-3xl font-bold tracking-wider text-title">TAX SMART</h1>
          </div>
        </div>
        {/* Right - User Info */}
        <div className="flex items-center ">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center">
                <span className="text-sm text-white font-medium">JD</span>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel className="text-center">
                <span className="text-sm">John Doe</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Button variant="ghost" onClick={handleLogout}>
                  Log out
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default TitleBar;

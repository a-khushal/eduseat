"use client"

import { usePathname, useRouter } from "next/navigation";
import { useAuth } from '@clerk/nextjs'

// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';
// import MobileMenu from './mobile-menu';

const Appbar = () => {
  //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  //   const toggleMobileMenu = () => {
  //     setIsMobileMenuOpen(!isMobileMenuOpen);
  //   };

  const router = useRouter();
  const pathname = usePathname();
  const { signOut, userId, sessionId } = useAuth()

  return (
    <nav className="absolute w-full z-50">
      <div className="text-black">
        {/* {JSON.stringify(userId)}
        {JSON.stringify(sessionId)} */}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            {pathname === '/medical' ? (
              <span onClick={() => router.push('/')}
                className="hover:cursor-pointer text-2xl font-bold text-white">
                edu<span className="text-orange-400">seat</span>
              </span>
            ) : pathname === '/engineering' ? (
              <span onClick={() => router.push('/')}
                className="hover:cursor-pointer text-2xl font-bold text-white">
                edu<span className="text-blue-400">seat</span>
              </span>
            ) : (
              <span
                onClick={() => router.push('/')}
                className="text-2xl hover:cursor-pointer font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
              >
                eduseat
              </span>
            )}
          </div>

          <div className="md:flex md:items-center md:space-x-4">
            {!(userId && sessionId) ? (
              <div>
                <button
                  className="text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-medium"
                  onClick={() => router.push("/sign-up")}
                >
                  Sign Up
                </button>
                <button
                  className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                  onClick={() => router.push("/sign-in")}
                >
                  Login
                </button>
              </div>
            ) : (
              <div>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-600 transition-colors"
                  onClick={() => { signOut() }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          {/* <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div> */}
        </div>
      </div>

      {/* Mobile menu */}
      {/* <MobileMenu isOpen={isMobileMenuOpen} /> */}
    </nav>
  );
};

export default Appbar;

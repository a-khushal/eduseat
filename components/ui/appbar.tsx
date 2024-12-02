"use client"

// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';
// import MobileMenu from './mobile-menu';

const Appbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

  return (
    <nav className="fixed w-full bg-transparent z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              eduseat
            </span>
          </div>

          <div className="md:flex md:items-center md:space-x-4">
            <button className="text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-medium">
              Sign Up
            </button>
            <button className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
              Login
            </button>
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
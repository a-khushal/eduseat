import React from 'react';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  return (
    <div
      className={`${
        isOpen ? 'block' : 'hidden'
      } md:hidden bg-white border-t border-gray-100 h-screen`}
    >
      <div className="px-4 pt-2 pb-3 space-y-1">
        <div className="pt-4 flex flex-col space-y-2">
          <button className="w-full text-center text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-medium">
            Sign Up
          </button>
          <button className="w-full text-center bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
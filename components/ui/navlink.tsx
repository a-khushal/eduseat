import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <a
      href={href}
      className="px-4 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
    >
      {children}
    </a>
  );
};

export default NavLink;
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Appbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`max-w-7xl fixed top-4 mx-auto inset-x-0 z-50 w-[95%] lg:w-full transition duration-200 ${isScrolled ? 'bg-neutral-50 dark:bg-neutral-900 shadow-[0px_-2px_0px_0px_var(--neutral-100),0px_2px_0px_0px_var(--neutral-100)] rounded-3xl dark:shadow-[0px_-2px_0px_0px_var(--neutral-800),0px_2px_0px_0px_var(--neutral-800)]' : ''}`}>
      <div className="hidden lg:block w-full">
        <div className="w-full flex relative justify-between px-4 py-2 rounded-full bg-transparent">
          <div className="flex flex-row gap-2 items-center">
            <Link href="/" className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20">
              <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm"></div>
              <span className="font-medium text-black dark:text-white">Every AI</span>
            </Link>
            <div className="flex items-center gap-1.5">
              <Link href="/pricing" className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-[#F5F5F5] text-zinc-600">
                Pricing
              </Link>
              <Link href="/blog" className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-[#F5F5F5] text-zinc-600">
                Blog
              </Link>
              <Link href="/contact" className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-[#F5F5F5] text-zinc-600">
                Contact
              </Link>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <Link href="/login" className="relative z-10 bg-transparent hover:bg-gray-100 border border-transparent text-black text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center dark:text-white dark:hover:bg-neutral-800 dark:hover:shadow-xl">
              Login
            </Link>
            <Link href="/signup" className="bg-neutral-900 relative z-10 hover:bg-black/90 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset]">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Appbar;

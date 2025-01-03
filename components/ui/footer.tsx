import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-white dark:bg-neutral-950 w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start md:px-8 w-full">
        {/* Logo and Copyright */}
        <div>
          <div className="mr-0 md:mr-4 md:flex mb-4">
            <Link
              className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
              href="/"
            >
              <Image
                alt="logo"
                src="https://assets.aceternity.com/logo-dark.png"
                width={30}
                height={30}
                quality={75}
                priority={false}
              />
              <span className="font-medium text-black dark:text-white">eduseat</span>
            </Link>
          </div>
          <div className="mt-2 ml-2">© copyright eduseat 2025. All rights reserved.</div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 lg:grid-cols-4 items-start mt-10 sm:mt-0 md:mt-0">
          {/* Pages */}
          <div className="flex justify-center space-y-4 flex-col w-full">
            <p className="font-bold text-neutral-600 dark:text-neutral-300">Pages</p>
            <ul className="list-none space-y-4 text-neutral-600 dark:text-neutral-300">
              <li><a href="#" className="transition-colors hover:text-neutral-800">Home</a></li>
              <li><a href="#" className="transition-colors hover:text-neutral-800">Features</a></li>
              <li><a href="#" className="transition-colors hover:text-neutral-800">Pricing</a></li>
              <li><a href="#" className="transition-colors hover:text-neutral-800">Contact</a></li>
              <li><a href="#" className="transition-colors hover:text-neutral-800">Blog</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="flex justify-center space-y-4 flex-col">
            <p className="font-bold text-neutral-600 dark:text-neutral-300">Socials</p>
            <ul className="list-none space-y-4 text-neutral-600 dark:text-neutral-300">
              <li><a href="#" className="transition-colors hover:text-neutral-800">Facebook</a></li>
              <li><a href="#" className="transition-colors hover:text-neutral-800">Instagram</a></li>
              <li><a href="#" className="transition-colors hover:text-neutral-800">Twitter</a></li>
              <li><a href="#" className="transition-colors hover:text-neutral-800">LinkedIn</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex justify-center space-y-4 flex-col">
            <p className="font-bold text-neutral-600 dark:text-neutral-300">Legal</p>
            <ul className="list-none space-y-4 text-neutral-600 dark:text-neutral-300">
              <li><a href="#" className="transition-colors hover:text-neutral-800">Privacy Policy</a></li>
              <li><a href="#" className="transition-colors hover:text-neutral-800">Terms of Service</a></li>
              <li><a href="#" className="transition-colors hover:text-neutral-800">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Register */}
          <div className="flex justify-center space-y-4 flex-col">
            <p className="font-bold text-neutral-600 dark:text-neutral-300">Register</p>
            <ul className="list-none space-y-4 text-neutral-600 dark:text-neutral-300">
              <li><a href="#" className="transition-colors hover:text-neutral-800">Sign Up</a></li>
              <li><a href="#" className="transition-colors hover:text-neutral-800">Login</a></li>
              <li><a href="#" className="transition-colors hover:text-neutral-800">Book a Councelling session</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Decorative Text */}
      <p className="text-center uppercase mt-20 text-5xl md:text-9xl lg:text-[12rem] xl:text-[13rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800">
        Eduseat
      </p>
    </div>
  );
};

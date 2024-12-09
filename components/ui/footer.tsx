"use client"

import { ArrowUpRight, Github, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  const links = [
    {
      href: "https://instagram.com/eduseat",
      icon: <Instagram className="w-5 h-5" />,
      label: "Instagram"
    },
    {
      href: "https://linkedin.com/company/eduseat",
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn"
    },
    {
      href: "https://github.com/eduseat",
      icon: <Github className="w-5 h-5" />,
      label: "GitHub"
    },
    {
      href: "https://twitter.com/eduseat",
      icon: <Twitter className="w-5 h-5" />,
      label: "X (Twitter)"
    }
  ];

  return (
    <footer className="relative border-t-2 border-gray-100 pt-16 pb-8 px-4">
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-400 opacity-20 blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="relative group">
          {/* Card Background with Gradient */}
          <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-3xl p-8 max-w-3xl mx-auto mb-16 border border-gray-200/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Start Your Journey to Success
            </h2>
            <p className="text-gray-600 mb-6">
              Get expert guidance for your medical or engineering career path. Book a counseling session today.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                onClick={() => window.location.href = 'mailto:counseling@eduseat.com'}
              >
                Book Counseling
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                className="inline-flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200"
                onClick={() => window.location.href = 'tel:+919876543210'}
              >
                Call Us
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Subtle Glow Effect on Hover */}
          {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-10 blur-lg transition-all duration-300" /> */}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600">
          <p>© 2024 EduSeat. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-800 transition-colors p-2 hover:bg-gray-100 rounded-full"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

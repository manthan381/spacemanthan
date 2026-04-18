"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "About Us", href: "/about-us" },
  { 
    name: "Expertise", 
    href: "/expertise",
    subLinks: [
      { name: "Design & Build", href: "/projects?category=Office%2C%20Design%20%26%20Build" },
      { name: "Smart Furniture", href: "/services/furniture" },
    ]
  },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact-us" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border border-b-gray-50 shadow-sm bg-white/75 backdrop-blur-md">
      {/* Background effect */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-gray-50 to-gray-100 opacity-90">
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <circle cx="50" cy="50" r="40" fill="url(#grad)" />
          <defs>
            <radialGradient id="grad">
              <stop offset="0%" stopColor="#ffffff20" />
              <stop offset="100%" stopColor="#00000000" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center"
      >
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png" // Replace with your actual logo file path
            alt="Space Manthan"
            width={34}
            height={34}
            className="object-contain"
          />
          <span className="text-xl font-bold text-[#012169]">
            SPACE MANTHAN
          </span>
        </Link>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className="text-[#012169] hover:text-[#012169] transition font-semibold"
              >
                {link.name}
              </Link>
              {link.subLinks && (
                <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white border border-gray-100 shadow-xl rounded-none py-2 w-48 flex flex-col">
                    {link.subLinks.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#012169] transition"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
            {isOpen ? <X size={24} color="white" /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 w-64 h-full bg-black bg-opacity-90 backdrop-blur text-white flex flex-col p-6 space-y-6 z-50"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}

"use client";

import {
  CalendarClock,
  Mail,
  MapPin,
  MessageCircle,
  Smartphone,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#273027] text-white">
        <div className="max-w-[1600px] w-full mx-auto px-6 sm:px-10 lg:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 pb-8 pt-4">
          {/* Logo + About */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Space Manthan
            </h2>
            <p className="text-sm sm:text-base text-gray-400">
              Space Manthan is a platform that is transforming the experience of
              creating, maintaining, and managing spaces with technology,
              organizing the industry, creating standards and processes, and
              driving transparency.
            </p>
            {/* Socials */}
            <div className="pt-6 pb-0">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/people/Space-Manthan/61583762248808/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaFacebookF size={28} />
                </a>
                <a
                  href="https://www.instagram.com/spacemanthan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaInstagram size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/company/space-manthan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaLinkedinIn size={28} />
                </a>
                <a
                  href="https://www.youtube.com/@SpaceManthan555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaYoutube size={28} />
                </a>
                <a
                  href="https://x.com/ManthanSpace"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaXTwitter size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:justify-self-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Company Information
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:text-lg text-gray-400 sm:block sm:space-y-2">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="hover:text-white transition">
                  Expertise
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-white transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:justify-self-end">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm sm:text-lg text-gray-100">
              <li className="flex gap-2">
                <div>
                  <MapPin
                    size={28}
                    className="text-white"
                  />
                </div>
                <div>
                  <p>Space Manthan,</p>
                  <p className="mt-1">
                    J-2/5, DLF City Phase - 2, Sector - 25, Gurugram, Haryana -
                    122008
                  </p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <div>
                  <Smartphone
                    size={28}
                    className="text-white"
                  />
                </div>
                <div>+91-9958097927, 0124-4446207</div>
              </li>
              <li className="flex items-center gap-2">
                <div>
                  <Mail
                    size={28}
                    className="text-white"
                  />
                </div>
                <div>hello@spacemanthan.com</div>
              </li>
              <li className="flex items-center gap-2">
                <div>
                  <MessageCircle
                    size={28}
                    className="text-white"
                  />
                </div>
                <div>WhatsApp: +91 9218028364</div>
              </li>
              <li className="flex items-center gap-2">
                <div>
                  <CalendarClock
                    size={28}
                    className="text-white"
                  />
                </div>
                <div>Mon - Sat: 9:30 AM to 6:30 PM</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-4 border-t border-[#444] py-6 text-center text-gray-400">
          <p className="text-[11px] sm:text-xs" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} Space Manthan. All rights
            reserved.
            <br />
            Content Owned, updated and maintained by Space Manthan.
            <br />
            The information or content displayed on this website is the
            intellectual property of the spacemanthan.com.
            <br />
            All the trademarks, copyrights, industrial designs, and patents are
            the intellectual property of Space Manthan.
          </p>
        </div>
      </footer>
    </>
  );
}

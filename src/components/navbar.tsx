'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileContactOpen, setMobileContactOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

  // ✅ Service Links
  const services = [
    { name: 'Borewell Camera Scanning', link: '/borewell-camera-scanning' },
    { name: 'Borewell Cleaning', link: '/borewell-cleaning' },
    { name: 'Ground Water Survey', link: '/ground-water-survey' },
    { name: 'Borewell Drilling', link: '/borewell-drilling' },
    { name: 'Installation Of Pumps', link: '/installation-pumps' },
    { name: 'Borewell Repair', link: '/borewell-repair' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2 ml-5">
            <Link href="/" className="flex items-center space-x-2 cursor-pointer">
              <Image
                src="/logo/slvlogo.jpeg"
                alt="Logo"
                width={64}
                height={64}
                className="h-16 w-16 rounded-full shadow"
              />
              <span className="text-xl font-bold text-gray-700 leading-tight">
                SLV <br /> Borewell Scanning
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center font-medium text-gray-700">
            <Link href="/" className="hover:text-green-600 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-green-600 transition">
              About Us
            </Link>

            {/* Desktop Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDesktopServicesOpen(!desktopServicesOpen)}
                className="flex items-center font-semibold text-gray-800 hover:text-green-600 transition"
              >
                Services <ChevronDown size={16} className="ml-1" />
              </button>
              {desktopServicesOpen && (
                <div className="absolute mt-4 w-64 bg-green-700 rounded-lg shadow-lg overflow-hidden z-10">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.link}
                      className="flex items-center gap-2 px-4 py-3 text-white hover:bg-green-600 hover:scale-105 transform transition-all duration-200"
                      onClick={() => setDesktopServicesOpen(false)}
                    >
                      <span className="text-yellow-400">➤</span> {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/contact" className="hover:text-green-600 transition">
              Contact
            </Link>

            <a href="tel:+91 88611 84809">
              <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded font-semibold transform hover:scale-105 transition duration-200">
                Call Us 
              </button>
            </a>

            <Link href="/contact">
              <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded font-semibold transform hover:scale-105 transition duration-200">
                Get a Free Quote 
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="transition transform hover:scale-110"
            >
              <svg
                className="h-6 w-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 px-4 pb-4 text-gray-700 font-medium">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-blue-600"
            >
              About Us
            </Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center hover:text-blue-600 transition w-full"
              >
                Services <ChevronDown size={16} className="ml-1" />
              </button>
              {mobileServicesOpen && (
                <div className="mt-2 w-56 bg-white shadow-lg rounded-md z-10">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.link}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}
                      className="block px-4 py-2 hover:bg-gray-300 transition"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Contact Dropdown */}
            <div>
              <button
                onClick={() => setMobileContactOpen(!mobileContactOpen)}
                className="flex items-center hover:text-blue-600 transition w-full"
              >
                Contact <ChevronDown size={16} className="ml-1" />
              </button>
              {mobileContactOpen && (
                <div className="mt-2 w-50 bg-white shadow-lg rounded-md z-10 justify-between">
                  <a href="tel:+919844281875">
                    <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded font-semibold transform hover:scale-105 transition duration-200 w-full">
                      Call Us 
                    </button>
                  </a>
                  <Link href="/contact">
                    <button className="bg-green-700 mt-3 hover:bg-green-800 text-white px-4 py-2 rounded font-semibold transform hover:scale-105 transition duration-200 w-full">
                      Request For a Quote 
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

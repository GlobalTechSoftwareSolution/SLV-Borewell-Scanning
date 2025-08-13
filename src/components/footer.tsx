"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const services = [
    { name: "Borewell Drilling", link: "/borewell-drilling" },
    { name: "Ground Water Survey", link: "/ground-water-survey" },
    { name: "Borewell Camera Scanning", link: "/borewell-camera-scanning" },
    { name: "Installation Of Pumps", link: "/installation-pumps" },
    { name: "Borewell Cleaning", link: "/borewell-cleaning" },
    { name: "Borewell Repair", link: "/borewell-repair" }
  ];

  return (
    <footer className="bg-[#73FFFF] text-black py-10 px-6 md:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-green-500 pb-10">
        
        {/* Logo & Tagline */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <Image
              src="/logo/slvlogo.jpeg"
              alt="logo"
              width={64}
              height={64}
              className="h-16 w-16 rounded-full shadow"
            />
            <span className="text-lg font-bold leading-tight">
              SLV <br /> Borewell Scanner
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-yellow-300">Home</Link></li>
            <li><Link href="/about" className="hover:text-yellow-300">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-300">Contact</Link></li>
            <li><Link href="/faqs" className="hover:text-yellow-300">FAQs</Link></li>
          </ul>
        </div>

        {/* Services List */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            {services.map((service, index) => (
              <li key={index}>
                <Link
                  href={service.link}
                  className="hover:text-yellow-300 transition"
                >
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <p className="mb-2">
            📍 8-2-293/82/B/21/1 Jawahar colony road no 5 Jubilee hills Hyderabad 500033
          </p>
          <p className="mb-2">
            📞 <a href="tel:+918861184809" className="hover:text-yellow-300">+91 88611 84809</a>
          </p>
          <p>
            ✉️ <a href="mailto:girishvr88@gmail.com" className="hover:text-yellow-300">girishvr88@gmail.com</a>
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-4 mt-4">
            <Link href="https://www.instagram.com/globaltechsoftwaresolutions00" target="_blank" rel="noopener noreferrer">
              <Image src="/logo/instagram.png" alt="Instagram" width={24} height={24} />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=61576624472044" target="_blank" rel="noopener noreferrer">
              <Image src="/logo/facebook.png" alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="https://www.youtube.com/@Globaltech-softwaresolutions" target="_blank" rel="noopener noreferrer">
              <Image src="/logo/youtube.png" alt="YouTube" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-screen-xl mx-auto mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-black">
       <h3>© {new Date().getFullYear()} SLV Borewell Scanner. All rights reserved.</h3>
        <h1>Designed & Developed by Global Tech Software Solutions</h1>
      </div>

      {/* WhatsApp Floating Button */}
      <Link
        href="https://wa.me/918861184809"
        className="fixed bottom-7 right-5 rounded-full shadow-lg z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/logo/whatsapp.png"
          alt="WhatsApp"
          width={48}
          height={48}
        />
      </Link>
    </footer>
  );
};

export default Footer;

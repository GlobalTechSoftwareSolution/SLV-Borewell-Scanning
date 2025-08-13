"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const HeroSection = () => {
  const images = [
    { src: "/logo/s2.jpg", className: "hero-img-home object-cover object-[50%_30%]" },
    { src: "/logo/s5.webp", className: "hero-img-scan1 object-cover object-[50%_30%]" },
    { src: "/logo/scan2.jpg", className: "hero-img-scan2 object-cover object-[50%_30%]" },
    { src: "/logo/scan4.webp", className: "hero-img-scan4 object-cover object-[50%_30%]" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className={`relative flex items-center justify-center text-center bg-cover bg-center mx-auto mt-5 transition-all duration-1000 ease-in-out ${images[currentIndex].className}`}
      style={{
        backgroundImage: `url('${images[currentIndex].src}')`,
        height: "90vh",
        width: "90%",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10 text-white px-4 drop-shadow-lg">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          WELCOME TO SLV <br />
          BOREWELL SCANNING
        </h1>

        <Link
          href="/about"
          className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded shadow-lg transition-all duration-300 inline-block"
        >
          Explore More
        </Link>
      </div>
      
    </section>
  );
};

export default HeroSection;

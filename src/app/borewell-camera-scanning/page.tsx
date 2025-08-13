"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { BookOpenIcon, CameraIcon, WrenchScrewdriverIcon, MagnifyingGlassIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";

export default function BorewellScanningCard() {
  return (
    <>
    <Navbar />
    <motion.div
      className="max-w-md mx-auto bg-gradient-to-br from-teal-800 to-teal-900 text-white rounded-3xl p-6 shadow-2xl text-center relative overflow-hidden border border-teal-700 mt-5"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      {/* Decorative elements */}
      <motion.div 
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-teal-700 opacity-20"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-teal-600 opacity-20"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      {/* Icon Circle */}
      <motion.div
        className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-lg z-10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
        viewport={{ once: true }}
      >
        <BookOpenIcon className="h-8 w-8 text-teal-800" />
      </motion.div>

      {/* Title */}
      <motion.h3 
        className="mt-6 text-2xl font-bold bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Advanced Borewell Scanning
      </motion.h3>

      {/* Subtitle */}
      <motion.p 
        className="mt-2 text-teal-200 font-medium"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        viewport={{ once: true }}
      >
        Comprehensive Inspection & Analysis
      </motion.p>

      {/* Description */}
      <motion.p 
        className="mt-4 text-sm leading-relaxed text-gray-100"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        viewport={{ once: true }}
      >
        Our state-of-the-art camera inspection services provide crystal clear visualization of your well's interior, enabling precise detection of structural issues, blockages, and potential failure points before they escalate into costly repairs.
      </motion.p>

      {/* Features with icons */}
      <motion.div 
        className="mt-6 space-y-3 text-left"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="flex items-start">
          <CameraIcon className="h-5 w-5 text-teal-300 mt-0.5 mr-2 flex-shrink-0" />
          <span className="text-sm text-gray-100">4K resolution camera with 360° rotation capability</span>
        </div>
        <div className="flex items-start">
          <MagnifyingGlassIcon className="h-5 w-5 text-teal-300 mt-0.5 mr-2 flex-shrink-0" />
          <span className="text-sm text-gray-100">Detection of mineral deposits, scaling, and biofilms</span>
        </div>
        <div className="flex items-start">
          <WrenchScrewdriverIcon className="h-5 w-5 text-teal-300 mt-0.5 mr-2 flex-shrink-0" />
          <span className="text-sm text-gray-100">Assessment of casing integrity and joint conditions</span>
        </div>
        <div className="flex items-start">
          <ShieldCheckIcon className="h-5 w-5 text-teal-300 mt-0.5 mr-2 flex-shrink-0" />
          <span className="text-sm text-gray-100">Early warning system for potential collapse zones</span>
        </div>
      </motion.div>

      {/* Benefits section */}
      <motion.div 
        className="mt-6 p-4 bg-teal-700/30 rounded-xl border border-teal-600/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <h4 className="text-sm font-semibold text-teal-200 mb-2">Key Benefits:</h4>
        <ul className="text-xs text-gray-100 space-y-1">
          <li className="flex items-start">
            <span className="text-teal-300 mr-1">•</span> Prevents unexpected well failures
          </li>
          <li className="flex items-start">
            <span className="text-teal-300 mr-1">•</span> Extends borewell lifespan by 30-50%
          </li>
          <li className="flex items-start">
            <span className="text-teal-300 mr-1">•</span> Reduces maintenance costs by up to 40%
          </li>
          <li className="flex items-start">
            <span className="text-teal-300 mr-1">•</span> Improves water quality monitoring
          </li>
        </ul>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.9 }}
        viewport={{ once: true }}
      >
        <button className="mt-6 px-6 py-2.5 bg-gradient-to-r from-teal-400 to-teal-500 text-white font-semibold rounded-full shadow-lg hover:shadow-teal-500/30 hover:scale-[1.02] transition-all duration-300 flex items-center mx-auto group">
          <Link href='/contact'>Request Inspection</Link>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
        <p className="mt-3 text-xs text-teal-200">Get your detailed report within 24 hours</p>
      </motion.div>
    </motion.div>
    <Footer />
    </>
  );
}
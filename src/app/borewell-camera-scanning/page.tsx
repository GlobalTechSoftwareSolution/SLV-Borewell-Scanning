"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { BookOpenIcon, CameraIcon, WrenchScrewdriverIcon, MagnifyingGlassIcon, ShieldCheckIcon, DocumentChartBarIcon } from "@heroicons/react/24/solid";

export default function BorewellScanningCard() {
  return (
    <>
      <Navbar />
      <motion.div
        className="max-w-4xl mx-auto bg-gradient-to-br from-teal-800 to-teal-900 text-white rounded-3xl p-6 shadow-2xl text-center relative overflow-hidden border border-teal-700 mt-8 mb-8"
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
          <CameraIcon className="h-8 w-8 text-teal-800" />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          {/* Text Content */}
          <div className="md:w-1/2">
            {/* Title */}
            <motion.h3 
              className="mt-6 text-3xl font-bold bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Advanced Borewell Scanning
            </motion.h3>

            {/* Subtitle */}
            <motion.p 
              className="mt-2 text-teal-200 font-medium text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Comprehensive Inspection & Analysis
            </motion.p>

            {/* Description */}
            <motion.p 
              className="mt-4 text-base leading-relaxed text-gray-100"
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
                <CameraIcon className="h-6 w-6 text-teal-300 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-base text-gray-100">4K resolution camera with 360° rotation capability</span>
              </div>
              <div className="flex items-start">
                <MagnifyingGlassIcon className="h-6 w-6 text-teal-300 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-base text-gray-100">Detection of mineral deposits, scaling, and biofilms</span>
              </div>
              <div className="flex items-start">
                <WrenchScrewdriverIcon className="h-6 w-6 text-teal-300 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-base text-gray-100">Assessment of casing integrity and joint conditions</span>
              </div>
              <div className="flex items-start">
                <ShieldCheckIcon className="h-6 w-6 text-teal-300 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-base text-gray-100">Early warning system for potential collapse zones</span>
              </div>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div 
            className="md:w-1/2 mt-6 md:mt-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden border-4 border-teal-500/30 shadow-lg">
              <Image
                src="/logo/scan4.webp" // Make sure to add this image to your public/images folder
                alt="Borewell Scanning in Progress"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Benefits section */}
        <motion.div 
          className="mt-6 p-5 bg-teal-700/30 rounded-xl border border-teal-600/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-teal-800/40 p-3 rounded-lg border border-teal-700/50">
              <h4 className="text-sm font-semibold text-teal-200 mb-2 flex items-center">
                <ShieldCheckIcon className="h-4 w-4 mr-1" />
                Prevention
              </h4>
              <p className="text-xs text-gray-100">Prevents unexpected well failures with early detection</p>
            </div>
            <div className="bg-teal-800/40 p-3 rounded-lg border border-teal-700/50">
              <h4 className="text-sm font-semibold text-teal-200 mb-2 flex items-center">
                <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Longevity
              </h4>
              <p className="text-xs text-gray-100">Extends borewell lifespan by 30-50%</p>
            </div>
            <div className="bg-teal-800/40 p-3 rounded-lg border border-teal-700/50">
              <h4 className="text-sm font-semibold text-teal-200 mb-2 flex items-center">
                <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Savings
              </h4>
              <p className="text-xs text-gray-100">Reduces maintenance costs by up to 40%</p>
            </div>
            <div className="bg-teal-800/40 p-3 rounded-lg border border-teal-700/50">
              <h4 className="text-sm font-semibold text-teal-200 mb-2 flex items-center">
                <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                Quality
              </h4>
              <p className="text-xs text-gray-100">Improves water quality monitoring</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-3 bg-gradient-to-r from-teal-400 to-teal-500 text-white font-semibold rounded-full shadow-lg hover:shadow-teal-500/30 hover:scale-[1.02] transition-all duration-300 flex items-center mx-auto group">
            <Link href='/contact'>Request Professional Inspection</Link>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          <p className="mt-3 text-sm text-teal-200">Get your detailed report with recommendations within 1-2 hours</p>
        </motion.div>

        {/* Certification badge */}
        <div className="absolute bottom-4 right-4 flex items-center bg-teal-800/80 px-3 py-2 rounded-lg border border-teal-600/50 backdrop-blur-sm">
          <svg className="w-5 h-5 text-teal-300 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
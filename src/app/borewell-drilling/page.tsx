'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function BorewellDrillingCard() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-[#E6F8F6] to-[#B8F1EC] py-12 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#066E63] via-[#0A7A6F] to-[#0A8A7B] text-white rounded-2xl p-8 shadow-2xl max-w-2xl mx-auto text-center relative overflow-hidden"
        >
          {/* Water droplet decorative elements */}
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#0BBFA5] rounded-full opacity-10"></div>
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#0BBFA5] rounded-full opacity-10"></div>
          <div className="absolute top-1/4 -left-8 w-16 h-16 bg-[#0BBFA5] rounded-full opacity-5"></div>
          
          {/* Animated water wave at bottom */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-16">
            <div className="absolute -bottom-6 left-0 right-0 h-12 bg-[#0BBFA5] opacity-20 rounded-t-full animate-wave"></div>
          </div>

          {/* Icon with enhanced animation */}
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute -top-10 left-1/2 transform -translate-x-1/2"
          >
            <div className="bg-gradient-to-r from-[#F472B6] to-[#F9A8D4] rounded-full p-4 shadow-xl">
              <Image
                src="/icons/drilling-icon.png"
                alt="Borewell Drilling Icon"
                width={50}
                height={50}
                className="filter drop-shadow-md"
              />
            </div>
          </motion.div>

          {/* Content with staggered animations */}
          <motion.div 
            className="mt-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 variants={item} className="text-2xl font-bold mb-4 text-[#F9F871]">
              Expert Borewell Drilling Solutions
            </motion.h3>
            
            <motion.p variants={item} className="text-md leading-relaxed mb-6">
              With over 2 years of hydrogeological expertise, we provide end-to-end borewell solutions 
              from survey to maintenance, ensuring optimal water yield with minimal environmental impact.
            </motion.p>
            
            {/* Unique Selling Points */}
            <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#0A5E55]/80 rounded-lg p-4 border-l-4 border-[#F9F871]">
                <h4 className="font-semibold text-[#F9F871] flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Fast Drilling
                </h4>
                <p className="text-xs mt-2">100-10000 feet per day with our advanced rigs</p>
              </div>
              <div className="bg-[#0A5E55]/80 rounded-lg p-4 border-l-4 border-[#F472B6]">
                <h4 className="font-semibold text-[#F9F871] flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  Precision
                </h4>
                <p className="text-xs mt-2">±2cm accuracy in borewell placement</p>
              </div>
            </motion.div>
            
            {/* Enhanced Technologies Section */}
            <motion.div variants={item} className="bg-[#0A5E55]/90 rounded-xl p-4 mb-6 border border-[#0BBFA5]/30">
              <h4 className="font-semibold text-[#F9F871] text-lg mb-3 flex items-center justify-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Advanced Technologies
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-[#0A6E63] p-3 rounded-lg">
                  <h5 className="font-medium text-[#F9F871] text-sm">Rotasonic</h5>
                  <p className="text-xs">Up to 300m depth, minimal disturbance</p>
                </div>
                <div className="bg-[#0A6E63] p-3 rounded-lg">
                  <h5 className="font-medium text-[#F9F871] text-sm">DTH Drilling</h5>
                  <p className="text-xs">Hard rock penetration up to 600m</p>
                </div>
                <div className="bg-[#0A6E63] p-3 rounded-lg">
                  <h5 className="font-medium text-[#F9F871] text-sm">Mud Rotary</h5>
                  <p className="text-xs">Soft to medium formations</p>
                </div>
              </div>
            </motion.div>
            
            {/* Comprehensive Services */}
            <motion.div variants={item} className="bg-[#0A5E55]/90 rounded-xl p-4 mb-6">
              <h4 className="font-semibold text-[#F9F871] text-lg mb-3">End-to-End Solutions</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { name: "Site Survey", icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" },
                  { name: "Yield Test", icon: "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" },
                  { name: "Casing", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
                  { name: "Pump Install", icon: "M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" },
                  { name: "Maintenance", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
                  { name: "Water Quality", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" }
                ].map((service, index) => (
                  <div key={index} className="bg-[#0A6E63] p-2 rounded-lg flex flex-col items-center">
                    <svg className="w-6 h-6 text-[#F9F871]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                    </svg>
                    <span className="text-xs mt-1">{service.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Testimonial */}
            <motion.div 
              variants={item}
              className="bg-[#0A5E55]/80 rounded-lg p-4 mb-6 border-l-4 border-[#F472B6]"
            >
              <div className="flex items-start">
                <svg className="w-5 h-5 text-[#F9F871] mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-sm italic">"Their team completed our 4000ft borewell in just 3 days with excellent yield. The post-installation support has been exceptional."</p>
                  <p className="text-xs mt-2 text-[#F9F871]">- Rajesh Kumar, Agricultural Farm Owner</p>
                </div>
              </div>
            </motion.div>
            
            {/* Enhanced CTA */}
            <motion.div 
              variants={item}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-6"
            >
              <button className="bg-gradient-to-r from-[#F472B6] to-[#F9A8D4] text-white px-8 py-3 rounded-full text-md font-semibold shadow-lg hover:shadow-xl transition-all flex items-center mx-auto">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <Link href='/contact'>Schedule Free Site Evaluation</Link>
              </button>
            </motion.div>
          </motion.div>
          
          {/* Certification badge */}
          <div className="absolute bottom-4 right-4 flex items-center">
            <svg className="w-6 h-6 text-[#F9F871] mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-xs font-medium">ISO 9001 Certified</span>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
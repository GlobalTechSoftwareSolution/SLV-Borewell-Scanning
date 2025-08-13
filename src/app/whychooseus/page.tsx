'use client';

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WhyChooseUs() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="bg-gradient-to-b from-green-50 to-green-100 py-16 px-4 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
          Why Choose <span className="text-green-700">SLV Borewell Assist</span> Drilling Service
        </h2>
        <div className="w-24 h-1 bg-green-600 mx-auto rounded-full"></div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
      >
        {/* Card 1 */}
        <motion.div 
          variants={item}
          className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-green-600 hover:shadow-xl transition-shadow"
        >
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 text-green-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                1
              </div>
              <h3 className="font-bold text-xl text-green-800">Expertise and Experience</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong className="text-green-700">Government Approved:</strong> We operate with complete legal compliance and adhere to all safety regulations.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong className="text-green-700">Experienced Professionals:</strong> Our team comprises highly qualified geologists, engineers, and skilled technical staff.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong className="text-green-700">Industry Leaders:</strong> Recognized as Bangalore's leading borewell company for reliability and quality.</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div 
          variants={item}
          className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-green-600 hover:shadow-xl transition-shadow"
        >
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 text-green-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                2
              </div>
              <h3 className="font-bold text-xl text-green-800">Cutting-Edge Technology</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong className="text-green-700">Modernized Rigs:</strong> High-power sensor-equipped rigs capable of drilling up to 2000ft deep.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong className="text-green-700">Advanced Technology:</strong> Latest 2022 Compressor borewell drilling machines for optimal performance.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong className="text-green-700">Specialized Rigs:</strong> Short-length borewell rigs for challenging narrow locations.</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div 
          variants={item}
          className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-green-600 hover:shadow-xl transition-shadow"
        >
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 text-green-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                3
              </div>
              <h3 className="font-bold text-xl text-green-800">Comprehensive Services</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong className="text-green-700">Groundwater Survey:</strong> Professional geologists determine optimal borewell locations.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong className="text-green-700">Soil Expertise:</strong> Capable of handling all soil and ground strata profiles.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong className="text-green-700">Affordable Solutions:</strong> Competitive pricing with complete transparency.</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Card 4 */}
        <motion.div 
          variants={item}
          className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-green-600 hover:shadow-xl transition-shadow"
        >
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 text-green-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">
                4
              </div>
              <h3 className="font-bold text-xl text-green-800">Versatility and Adaptability</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong className="text-green-700">Diverse Applications:</strong> Serving homes, apartments, industries, and agricultural lands.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong className="text-green-700">Challenging Locations:</strong> Robo-sensor vehicles for difficult indoor drilling.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">✓</span>
                <span><strong className="text-green-700">All Areas Covered:</strong> Service available throughout Bangalore and surrounding regions.</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <div className="inline-block bg-green-700 text-white px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <p className="text-lg font-semibold">
             Choose Borewell Assist and experience the difference. We are the trusted partner for all your borewell needs.
          </p>
          <button className="mt-4 bg-white text-green-700 px-6 py-2 rounded-full font-bold hover:bg-green-50 transition-colors">
            <Link href='/contact'>Contact Us Today</Link>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
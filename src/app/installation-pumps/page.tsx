'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function PumpInstallationSection() {
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={fadeIn}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-[#066E63] to-[#0A8A7B] text-white rounded-2xl p-8 shadow-2xl max-w-4xl mx-auto my-12 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#0BBFA5] rounded-full opacity-10"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#0BBFA5] rounded-full opacity-10"></div>
      
      {/* Water pipe animation */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#0BBFA5]/30 animate-flow"></div>

      {/* Content with staggered animations */}
      <motion.div 
        className="relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2 
          variants={item}
          className="text-3xl font-bold mb-6 text-center text-[#F9F871]"
        >
          Professional Pump Installation Services
        </motion.h2>
        
        <motion.p 
          variants={item}
          className="text-lg text-center mb-8 max-w-3xl mx-auto"
        >
          We provide expert installation of high-efficiency pumping systems tailored to your specific water requirements, 
          ensuring optimal performance and longevity.
        </motion.p>
        
        {/* Pump Types Section */}
        <motion.div 
          variants={item}
          className="bg-[#0A5E55]/90 rounded-xl p-6 mb-8"
        >
          <h3 className="text-xl font-semibold mb-4 text-[#F9F871] flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
            Pump Types We Install
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                name: "Submersible Pumps",
                desc: "For deep borewells (100-1000ft), silent operation",
                specs: ["Stainless steel construction", "3HP-20HP capacity", "Auto-protection systems"]
              },
              {
                name: "Jet Pumps",
                desc: "Shallow well solutions (0-25ft)",
                specs: ["Self-priming", "1HP-5HP capacity", "Ideal for residential use"]
              },
              {
                name: "Centrifugal Pumps",
                desc: "Surface water transfer",
                specs: ["High flow rates", "0.5HP-10HP capacity", "Industrial grade"]
              },
              {
                name: "Solar Pumps",
                desc: "Eco-friendly off-grid solutions",
                specs: ["DC/AC options", "0.5HP-5HP capacity", "Battery backup available"]
              },
              {
                name: "Booster Pumps",
                desc: "Pressure enhancement systems",
                specs: ["Constant pressure", "0.5HP-3HP capacity", "Auto-cutoff"]
              },
              {
                name: "Sewage Pumps",
                desc: "Wastewater management",
                specs: ["Solids handling", "2HP-15HP capacity", "Clog-resistant"]
              }
            ].map((pump, index) => (
              <div key={index} className="bg-[#0A6E63] p-4 rounded-lg border-l-4 border-[#F9F871]">
                <h4 className="font-bold text-[#F9F871]">{pump.name}</h4>
                <p className="text-sm mb-2">{pump.desc}</p>
                <ul className="text-xs space-y-1">
                  {pump.specs.map((spec, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-1 h-1 bg-white rounded-full mt-2 mr-2"></span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Installation Process */}
        <motion.div 
          variants={item}
          className="bg-[#0A5E55]/90 rounded-xl p-6 mb-8"
        >
          <h3 className="text-xl font-semibold mb-4 text-[#F9F871] flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Our Installation Process
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 h-full w-0.5 bg-[#0BBFA5] opacity-50"></div>
            
            <div className="space-y-6 pl-10">
              {[
                {
                  step: "Site Assessment",
                  desc: "Evaluate water source, usage requirements, and power availability"
                },
                {
                  step: "System Design",
                  desc: "Calculate head pressure, flow rate, and recommend optimal pump"
                },
                {
                  step: "Quality Check",
                  desc: "Inspect all components before installation"
                },
                {
                  step: "Professional Installation",
                  desc: "Certified technicians handle the complete setup"
                },
                {
                  step: "Testing & Calibration",
                  desc: "Verify performance and adjust settings"
                },
                {
                  step: "User Training",
                  desc: "Demonstrate operation and maintenance"
                }
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-10 top-1 w-6 h-6 rounded-full bg-[#F9F871] flex items-center justify-center">
                    <span className="text-[#066E63] font-bold">{index + 1}</span>
                  </div>
                  <h4 className="font-semibold text-[#F9F871]">{item.step}</h4>
                  <p className="text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Benefits Section */}
        <motion.div 
          variants={item}
          className="bg-[#0A5E55]/90 rounded-xl p-6 mb-8"
        >
          <h3 className="text-xl font-semibold mb-4 text-[#F9F871] flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Why Choose Our Pump Installation
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Energy Efficiency",
                desc: "Properly sized pumps save 20-50% on electricity"
              },
              {
                title: "Extended Equipment Life",
                desc: "Correct installation prevents premature wear"
              },
              {
                title: "Warranty Protection",
                desc: "Maintain manufacturer warranties with professional install"
              },
              {
                title: "Optimal Performance",
                desc: "Get maximum flow rate and pressure"
              },
              {
                title: "Safety Compliance",
                desc: "Meets all electrical and plumbing codes"
              },
              {
                title: "24/7 Support",
                desc: "Emergency service available"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-[#0A6E63] p-4 rounded-lg flex items-start">
                <svg className="w-5 h-5 text-[#F9F871] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h4 className="font-semibold">{benefit.title}</h4>
                  <p className="text-sm">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div 
          variants={item}
          whileHover={{ scale: 1.02 }}
          className="text-center"
        >
          <button className="bg-gradient-to-r from-[#F472B6] to-[#F9A8D4] text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
           <Link href='/contact'>Get Your Free Pump Consultation</Link>
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
    <Footer />
    </>
  );
}
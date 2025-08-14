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
          className="bg-gradient-to-br from-[#066E63] via-[#0A7A6F] to-[#0A8A7B] text-white rounded-2xl p-8 shadow-2xl max-w-4xl mx-auto text-center relative overflow-hidden"
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
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <motion.h3 variants={item} className="text-3xl font-bold mb-4 text-[#F9F871]">
                  Expert Borewell Drilling Solutions
                </motion.h3>
                
                <motion.p variants={item} className="text-lg leading-relaxed mb-6">
                  With over 2 years of hydrogeological expertise, we provide end-to-end borewell solutions 
                  from survey to maintenance, ensuring optimal water yield with minimal environmental impact.
                </motion.p>
                
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
              </div>
              
              {/* Added borewell drilling image */}
              <motion.div 
                variants={item}
                className="md:w-1/2 mt-6 md:mt-0"
              >
                <div className="relative h-64 md:h-80 rounded-xl overflow-hidden border-4 border-[#0BBFA5] shadow-lg">
                  <Image
                    src="/logo/borewell.jpg" // Make sure to add this image to your public/images folder
                    alt="Borewell Drilling in Progress"
                    fill
                    className="object-cover object-[70%_70%]"
                    priority
                  />
                </div>
              </motion.div>
            </div>
            
            {/* Unique Selling Points */}
            <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
              <div className="bg-[#0A5E55]/80 rounded-lg p-4 border-l-4 border-[#F9F871] hover:scale-[1.02] transition-transform">
                <h4 className="font-semibold text-[#F9F871] flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Fast Drilling
                </h4>
                <p className="text-sm mt-2">100-10000 feet per day with our advanced rigs</p>
              </div>
              <div className="bg-[#0A5E55]/80 rounded-lg p-4 border-l-4 border-[#F472B6] hover:scale-[1.02] transition-transform">
                <h4 className="font-semibold text-[#F9F871] flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  Precision
                </h4>
                <p className="text-sm mt-2">±2cm accuracy in borewell placement</p>
              </div>
              <div className="bg-[#0A5E55]/80 rounded-lg p-4 border-l-4 border-[#0BBFA5] hover:scale-[1.02] transition-transform">
                <h4 className="font-semibold text-[#F9F871] flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Guaranteed
                </h4>
                <p className="text-sm mt-2">90% success rate with our scientific approach</p>
              </div>
            </motion.div>
            
            {/* Enhanced Technologies Section */}
            <motion.div variants={item} className="bg-[#0A5E55]/90 rounded-xl p-6 mb-8 border border-[#0BBFA5]/30">
              <h4 className="font-semibold text-[#F9F871] text-xl mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                Advanced Drilling Technologies
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#0A6E63] p-4 rounded-lg hover:bg-[#0A7A6F] transition-colors">
                  <h5 className="font-bold text-[#F9F871] text-md">Rotasonic Drilling</h5>
                  <p className="text-sm mt-2">Ideal for depths up to 300m with minimal ground disturbance</p>
                </div>
                <div className="bg-[#0A6E63] p-4 rounded-lg hover:bg-[#0A7A6F] transition-colors">
                  <h5 className="font-bold text-[#F9F871] text-md">DTH Drilling</h5>
                  <p className="text-sm mt-2">Penetrates hard rock formations up to 600m depth</p>
                </div>
                <div className="bg-[#0A6E63] p-4 rounded-lg hover:bg-[#0A7A6F] transition-colors">
                  <h5 className="font-bold text-[#F9F871] text-md">Mud Rotary</h5>
                  <p className="text-sm mt-2">Perfect for soft to medium geological formations</p>
                </div>
              </div>
            </motion.div>
            
            {/* Comprehensive Services */}
            <motion.div variants={item} className="bg-[#0A5E55]/90 rounded-xl p-6 mb-8">
              <h4 className="font-semibold text-[#F9F871] text-xl mb-4">Our Comprehensive Services</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { name: "Site Survey", icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7", 
                    desc: "Scientific water source detection" },
                  { name: "Yield Test", icon: "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6", 
                    desc: "Accurate water yield assessment" },
                  { name: "Casing", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4", 
                    desc: "Quality casing installation" },
                  { name: "Pump Install", icon: "M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z", 
                    desc: "Optimal pump selection" },
                  { name: "Maintenance", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10", 
                    desc: "Regular maintenance services" },
                  { name: "Water Quality", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z", 
                    desc: "Water quality testing" }
                ].map((service, index) => (
                  <div key={index} className="bg-[#0A6E63] p-4 rounded-lg hover:bg-[#0A7A6F] transition-colors flex flex-col items-center text-center">
                    <svg className="w-8 h-8 text-[#F9F871] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                    </svg>
                    <span className="font-medium text-sm">{service.name}</span>
                    <span className="text-xs mt-1">{service.desc}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Testimonial */}
            <motion.div 
              variants={item}
              className="bg-[#0A5E55]/80 rounded-xl p-6 mb-8 border-l-4 border-[#F472B6]"
            >
              <div className="flex items-start">
                <svg className="w-8 h-8 text-[#F9F871] mt-1 mr-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-lg italic">"Their team completed our 4000ft borewell in just 3 days with excellent yield. The post-installation support has been exceptional."</p>
                  <p className="text-sm mt-3 text-[#F9F871] font-medium">- Rajesh Kumar, Agricultural Farm Owner</p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
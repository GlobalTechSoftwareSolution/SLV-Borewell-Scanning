'use client';

import { motion, AnimatePresence } from "framer-motion";
import { 
  WrenchIcon, 
  BoltIcon, 
  ShieldCheckIcon, 
  ClockIcon, 
  PhoneIcon, 
  CurrencyDollarIcon 
} from "@heroicons/react/24/solid";
import Navbar from "@/components/navbar";
import Footer from '@/components/footer';

export default function BorewellRepairCard() {
  const features = [
    { icon: <BoltIcon className="h-5 w-5" />, text: "24/7 Emergency Service" },
    { icon: <ShieldCheckIcon className="h-5 w-5" />, text: "1 Year Warranty" },
    { icon: <ClockIcon className="h-5 w-5" />, text: "Same Day Service" },
    { icon: <CurrencyDollarIcon className="h-5 w-5" />, text: "No Hidden Costs" }
  ];

  const services = [
    { title: "Diagnostics", desc: "Comprehensive system analysis" },
    { title: "Repairs", desc: "Motor, pump & pipe fixes" },
    { title: "Maintenance", desc: "Preventive care plans" },
    { title: "Installation", desc: "New borewell setup" },
    { title: "Water Testing", desc: "Quality & purity checks" },
    { title: "Automation", desc: "Smart monitoring systems" }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-teal-50 to-emerald-100 py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:flex">
            {/* Left Side - Visual Section */}
            <motion.div 
              className="md:w-2/5 bg-gradient-to-br from-emerald-800 to-teal-900 p-8 flex flex-col items-center justify-center"
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                className="bg-white/20 p-6 rounded-full mb-8"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4,
                  ease: "easeInOut"
                }}
              >
                <WrenchIcon className="h-16 w-16 text-white" />
              </motion.div>
              
              <motion.h3 
                className="text-3xl font-extrabold text-white mb-6 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Expert Borewell Solutions
              </motion.h3>
              
              <motion.div 
                className="grid grid-cols-2 gap-4 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 p-3 rounded-lg flex items-center space-x-2 backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="text-emerald-300">{feature.icon}</div>
                    <span className="text-white text-sm font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side - Content Section */}
            <motion.div 
              className="md:w-3/5 bg-white p-8 md:p-12"
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.h2 
                className="text-4xl font-bold text-gray-900 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Borewell Repair & Maintenance
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Comprehensive solutions for uninterrupted water supply with 15+ years of expertise in borewell systems.
              </motion.p>

              <motion.div 
                className="grid grid-cols-2 gap-6 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className="border border-gray-200 rounded-xl p-4 hover:border-emerald-400 transition-colors"
                    whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                  >
                    <h4 className="font-bold text-emerald-700 text-lg mb-1">{service.title}</h4>
                    <p className="text-gray-600 text-sm">{service.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                className="mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <h4 className="font-bold text-gray-900 mb-3">Common Issues We Fix:</h4>
                <ul className="space-y-2">
                  {[
                    "Low water pressure or dry borewell",
                    "Motor failure or frequent tripping",
                    "Contaminated water supply",
                    "Pipe leaks or casing damage",
                    "Electrical faults in pumping system",
                    "Sediment buildup in borewell"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.7 + index * 0.05 }}
                    >
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="bg-emerald-50 border border-emerald-100 rounded-xl p-6 text-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex justify-center items-center space-x-3 mb-3">
                  <PhoneIcon className="h-6 w-6 text-emerald-700" />
                  <span className="font-bold text-emerald-800 text-xl">Emergency Call: +91 88611 84809</span>
                </div>
                <p className="text-emerald-700">Free inspection and estimate for first-time customers</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

      </div>
      <Footer />
    </>
  );
}
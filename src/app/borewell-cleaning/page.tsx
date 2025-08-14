'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  CurrencyDollarIcon, 
  WrenchScrewdriverIcon, 
  CheckBadgeIcon, 
  ClockIcon, 
  ShieldCheckIcon 
} from "@heroicons/react/24/solid";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function BorewellCleaningCard() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-gradient-to-br from-[#0D7C6D] to-[#0A5E55] rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Borewell cleaning image */}
          <div className="relative w-full h-56 md:h-72">
            <Image
              src="/logo/s2.jpg" // <-- Make sure you place your image in public/images/
              alt="Borewell Cleaning Service"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Header with icon */}
          <div className="relative pt-10 px-6">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#F472B6] to-[#F9A8D4] p-4 rounded-full shadow-lg"
            >
              <WrenchScrewdriverIcon className="h-8 w-8 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold text-center text-[#F9F871]">
              Professional Borewell Cleaning
            </h3>
            <p className="mt-2 text-center text-green-100">
              Restore your borewell's efficiency with our comprehensive cleaning services
            </p>
          </div>

          {/* Main content */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-6"
          >
            {/* Problem section */}
            <motion.div variants={item} className="mb-6">
              <h4 className="font-semibold text-lg text-[#F9F871] mb-3">
                Common Borewell Problems We Solve:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-white">
                {[
                  "Sediment accumulation",
                  "Reduced water flow",
                  "Sand intrusion",
                  "Bacterial contamination",
                  "Iron/manganese deposits",
                  "Pump clogging issues"
                ].map((problem, index) => (
                  <div key={index} className="flex items-center bg-[#0A6E63] px-4 py-2 rounded-lg">
                    <CheckBadgeIcon className="h-5 w-5 text-[#F9F871] mr-2" />
                    <span className="text-sm">{problem}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Process section */}
            <motion.div variants={item} className="mb-6">
              <h4 className="font-semibold text-lg text-[#F9F871] mb-3">Our Cleaning Process:</h4>
              <div className="space-y-4">
                {[
                  { step: "Inspection", desc: "Camera survey to identify blockages and damage" },
                  { step: "High-pressure jetting", desc: "Removes stubborn deposits and sediment" },
                  { step: "Chemical treatment", desc: "Eliminates bacterial growth and mineral deposits" },
                  { step: "Mechanical cleaning", desc: "For severe blockages and encrustations" },
                  { step: "Final testing", desc: "Flow rate measurement and water quality check" }
                ].map((step, index) => (
                  <div key={index} className="flex items-start bg-[#0A6E63]/90 p-3 rounded-lg border-l-4 border-[#F9F871]">
                    <div className="bg-[#F9F871] text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                      {index + 1}
                    </div>
                    <div>
                      <h5 className="font-medium text-white">{step.step}</h5>
                      <p className="text-sm text-green-100">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits section */}
            <motion.div variants={item} className="mb-6">
              <h4 className="font-semibold text-lg text-[#F9F871] mb-3">Benefits:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: <ShieldCheckIcon className="h-5 w-5 text-[#F9F871]" />, title: "Improved Water Quality", desc: "Reduces contaminants and bacteria" },
                  { icon: <ClockIcon className="h-5 w-5 text-[#F9F871]" />, title: "Faster Service", desc: "Most jobs completed in 4-6 hours" },
                  { icon: <CurrencyDollarIcon className="h-5 w-5 text-[#F9F871]" />, title: "Cost Effective", desc: "Cheaper than drilling new borewell" },
                  { icon: <WrenchScrewdriverIcon className="h-5 w-5 text-[#F9F871]" />, title: "Equipment Protection", desc: "Extends pump and pipe lifespan" }
                ].map((benefit, index) => (
                  <div key={index} className="bg-[#0A6E63] p-3 rounded-lg flex items-start">
                    <div className="mr-3">{benefit.icon}</div>
                    <div>
                      <h5 className="font-medium text-white">{benefit.title}</h5>
                      <p className="text-sm text-white">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 text-center"
            >
              <Link href='/contact'>
                <button className="bg-gradient-to-r from-[#F472B6] to-[#F9A8D4] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center">
                  <WrenchScrewdriverIcon className="h-5 w-5 mr-2" />
                  Schedule Cleaning Service
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

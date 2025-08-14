"use client";

import { motion, Variants } from "framer-motion";
import {
  ShieldCheckIcon,
  MapIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ClockIcon
} from "@heroicons/react/24/solid";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";

export default function GroundWaterSurveyCard() {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0, 0, 0.58, 1] as const
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-teal-50 to-teal-100 py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0, 0, 0.58, 1] as const }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-teal-700 to-teal-800 rounded-2xl shadow-xl overflow-hidden max-w-2xl mx-auto"
        >
          {/* Image Section */}
          <div className="relative w-full h-56 md:h-72">
            <Image
              src="/logo/servey.avif"
              alt="Groundwater Survey in Progress"
              fill
              className="object-cover object-[70%_65%]"
              priority
            />
          </div>

          {/* Header with animated icon */}
          <div className="relative pt-12 px-6 text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 p-4 rounded-full shadow-lg"
            >
              <MapIcon className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-2xl font-bold text-amber-300 mb-2">
              Professional Ground Water Survey
            </h3>
            <p className="text-teal-100">
              Accurate hydrogeological assessment for optimal borewell placement
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
            {/* Features */}
            <motion.div variants={item} className="mb-6">
              <h4 className="font-semibold text-lg text-amber-300 mb-3 flex items-center justify-center">
                <MagnifyingGlassIcon className="w-5 h-5 mr-2" />
                Our Survey Methods
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-white">
                {[
                  "Electrical Resistivity Testing",
                  "Electromagnetic Survey",
                  "Seismic Refraction",
                  "Geological Mapping",
                  "Remote Sensing Analysis",
                  "Borehole Logging"
                ].map((method, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-teal-600/50 px-4 py-2 rounded-lg"
                  >
                    <CheckIcon className="h-5 w-5 text-amber-300 mr-2" />
                    <span className="text-sm">{method}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div variants={item} className="mb-6">
              <h4 className="font-semibold text-lg text-amber-300 mb-3 flex items-center justify-center">
                <ShieldCheckIcon className="w-5 h-5 mr-2" />
                Key Benefits
              </h4>
              <div className="space-y-3">
                {[
                  {
                    icon: <ChartBarIcon className="w-5 h-5 text-amber-300" />,
                    title: "90% Accuracy Rate",
                    desc: "In predicting water availability"
                  },
                  {
                    icon: <DocumentTextIcon className="w-5 h-5 text-amber-300" />,
                    title: "Detailed Report",
                    desc: "Including recommended depth and yield estimates"
                  },
                  {
                    icon: <ClockIcon className="w-5 h-5 text-amber-300" />,
                    title: "Quick Turnaround",
                    desc: "Survey completed within 24-48 hours"
                  }
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-teal-600/30 p-3 rounded-lg border-l-4 border-amber-400 flex items-start"
                  >
                    <div className="mr-3 mt-0.5">{benefit.icon}</div>
                    <div>
                      <h5 className="font-medium text-white">{benefit.title}</h5>
                      <p className="text-sm text-teal-100">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Process */}
            <motion.div variants={item} className="mb-6">
              <h4 className="font-semibold text-lg text-amber-300 mb-3 flex items-center justify-center">
                <ClockIcon className="w-5 h-5 mr-2" />
                Our Process
              </h4>
              <div className="relative">
                <div className="absolute left-5 h-full w-0.5 bg-teal-600"></div>
                <div className="space-y-4 pl-10 text-white">
                  {[
                    "Initial Site Assessment",
                    "Equipment Setup & Calibration",
                    "Data Collection (2-4 hours)",
                    "Data Analysis & Interpretation",
                    "Report Preparation",
                    "Recommendation Delivery"
                  ].map((step, index) => (
                    <div key={index} className="relative">
                      <div className="absolute -left-10 top-1 w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-teal-800"></div>
                      </div>
                      <div className="bg-teal-600/40 p-3 rounded-lg">
                        <p className="text-sm">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 text-center"
            >
              <Link
                href="/contact"
                className="bg-gradient-to-r from-amber-400 to-amber-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center"
              >
                <DocumentTextIcon className="w-5 h-5 mr-2" />
                Book Your Survey Today
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

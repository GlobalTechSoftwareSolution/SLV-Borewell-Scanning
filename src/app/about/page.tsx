"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from '@/components/navbar';
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <>
    <Navbar />
    <section className="bg-[#EDE8DC] min-h-screen py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-green-800 mb-6"
        >
          About Us
        </motion.h1>


        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/logo/about.jpeg"
              alt="Our Team"
              width={500}
              height={350}
              className="rounded-xl shadow-lg border-4 border-green-600"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-800 mb-4 leading-relaxed">
              At <span className="font-semibold">Borewell Assist</span>, we are dedicated to providing top-notch borewell drilling and maintenance services in Bangalore. Our expertise spans across deep borewell drilling, tube well drilling, water well installation, and comprehensive borewell maintenance and cleaning.
            </p>
            <p className="text-gray-800 mb-4 leading-relaxed">
              With a skilled team of borewell engineers and groundwater survey experts, we leverage advanced technology to ensure efficient, reliable solutions tailored to our clients’ unique needs.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Our commitment to quality service, customer satisfaction, and competitive pricing positions us as a trusted partner in borewell solutions.
            </p>
          </motion.div>
        </div>

        {/* What We Offer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 bg-white p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-bold text-green-700 mb-4">What We Offer</h3>
          <p className="text-gray-800 mb-4">
            We solve technically challenging drilling problems and provide endless drilling solutions, from geotechnical investigations to groundwater monitoring wells and sonic drilling. We work across India and the Asia Pacific regions.
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>Clients have previously experienced poor results with another contractor</li>
            <li>The highest quality results are required</li>
            <li>More efficient well performance is required</li>
            <li>Safety or environmental risk management is the highest priority</li>
            <li>Continued support and aftercare service required</li>
          </ul>
        </motion.div>

        {/* Mission & Vision */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">
          
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="bg-green-700 text-white p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <h3 className="text-xl font-bold mb-3">Our Mission</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Best quality service for customers at affordable price</li>
              <li>Continuous technology upgradation</li>
              <li>Adding more & more happy customers</li>
            </ul>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="bg-yellow-400 text-gray-900 p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            <h3 className="text-xl font-bold mb-3">Our Vision</h3>
            <p>
              Our vision is to deliver high-level customer satisfaction by serving customers with the latest technology, assuring quality & service for generations to come. We assure you cost-effective services round the clock in and around Bangalore.
            </p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-green-800 mb-4">
            Need Our Services?
          </h3>
          <p className="text-gray-700 mb-6">
            Contact us today and let’s find the right solution for you.
          </p>
          <a
            href="/contact"
            className="bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-800 transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
    < Footer/>
    </>
  );
}

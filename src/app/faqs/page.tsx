"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const faqs = [
  {
    question: "How do I know if I need borewell drilling?",
    answer:
      "If you’re constructing a new property or your existing water source is insufficient, borewell drilling can provide a reliable water supply. We can conduct a groundwater survey to confirm the availability before drilling.",
  },
  {
    question: "What is a groundwater survey, and why is it important?",
    answer:
      "A groundwater survey uses scientific methods to detect underground water sources, ensuring drilling is done at the most suitable location, saving time and cost.",
  },
  {
    question: "How often should a borewell be cleaned?",
    answer:
      "We recommend cleaning every 2–3 years or sooner if you notice reduced water flow, muddy water, or unusual odors.",
  },
  {
    question: "What is borewell recharging?",
    answer:
      "It’s a method of increasing the water availability in your borewell by channeling rainwater or surface water into it, helping restore its yield.",
  },
  {
    question: "Do you provide camera scanning for borewells?",
    answer:
      "Yes — our borewell camera scanning helps detect blockages, damages, or water level issues so we can provide precise repair solutions.",
  },
  {
    question: "How long does it take to drill a borewell?",
    answer:
      "Depending on the depth and soil conditions, most borewell drilling projects are completed within 1–2 days.",
  },
  {
    question: "Are your services available outside Bangalore?",
    answer:
      "Yes, we serve Bangalore and surrounding areas, and can travel further depending on the project requirements.",
  },
  {
    question: "What is the average cost of borewell drilling?",
    answer:
      "The cost depends on depth, location, and soil type. Contact us for a free site inspection and estimate.",
  },
  {
    question: "How can I book your services?",
    answer:
      "You can call us at +91-8861184809, email us at girishvr88@gmail.com, or use the Contact page on our website.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <Navbar />
    <section className="bg-[#EDE8DC] py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-[1.02]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-800 hover:bg-green-100 transition-colors duration-300"
              >
                {faq.question}
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ease-in-out ${
                    openIndex === index ? "rotate-180 text-green-600" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "max-h-40 opacity-100 py-4 px-6 border-t border-gray-200"
                    : "max-h-0 opacity-0 px-6"
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
}

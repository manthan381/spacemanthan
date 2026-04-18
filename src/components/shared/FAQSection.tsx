"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Q.1 How can workplace design positively impact my business and employees?",
    answer: "Good design boosts productivity, improves employee well-being, and reflects your company values. It creates an environment where teams feel supported, reducing stress and fostering creativity."
  },
  {
    question: "Q.2 How does your firm incorporate sustainability into workplace design?",
    answer: "We prioritize eco-friendly materials, energy-efficient lighting, and biophilic elements (like indoor plants and natural light) to create spaces that are healthy for both people and the planet."
  },
  {
    question: "Q.3 Can you guide us through the workplace design and build process?",
    answer: "Yes, we offer end-to-end solutions. From initial space planning and 3D visualization to construction management and final furniture installation, we handle everything under one roof."
  },
  {
    question: "Q.4 What is the typical timeline for a workplace design and build project?",
    answer: "Timelines vary by project size, but typically range from 8 to 16 weeks. We focus on precision and efficiency to deliver high-quality results within challenging deadlines."
  },
  {
    question: "Q.5 How do you ensure that workplace designs are compliant with relevant regulations and safety standards (EHS)?",
    answer: "Our team stays updated on all building codes, fire safety regulations, and EHS standards. We perform rigorous checks throughout the design and construction phases to ensure full compliance."
  },
  {
    question: "Q.6 Can you help with furniture selection and procurement for our workplace?",
    answer: "Absolutely. We manufacture modular, custom-fit furniture precisely tailored to your office's dimensions and style, ensuring a seamless blend of aesthetics and functionality."
  },
  {
    question: "Q.7 How do you handle budgeting and cost control during the design and build process?",
    answer: "We provide transparent, detailed estimates upfront and use advanced project management techniques to monitor costs daily, ensuring your project stays on track and within budget."
  },
  {
    question: "Q.8 Do you provide post-installation support or maintenance services for office interior design projects?",
    answer: "Yes, we stand by our work. We provide comprehensive warranties and ongoing maintenance support to ensure your space remains in peak condition long after the build is complete."
  }
];

export function FAQSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-black mb-6 tracking-tight"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as const }}
          >
            Frequently Wondered <span className="font-bold">Whys</span>
          </motion.h2>
          <motion.div 
            className="inline-block border border-gray-900 px-5 py-1.5"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-base md:text-lg text-gray-800">
              Discover answers in <i className="font-serif">our</i> <span className="font-bold uppercase tracking-widest">FAQ</span> corner
            </p>
          </motion.div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100">
              <AccordionTrigger className="text-lg md:text-xl font-medium text-gray-900 hover:no-underline hover:text-gray-600 transition-colors text-left py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-base md:text-lg leading-relaxed pb-8">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

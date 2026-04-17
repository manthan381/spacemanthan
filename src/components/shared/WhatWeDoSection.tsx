"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Architecture & Design",
    description:
      "We redefine work environments with intelligent spatial design and precision-engineered structures to enhance productivity and reinforce brand identity.",
    image: "/images/projects/urban-comany-office.webp",
  },
  {
    title: "Office Design & Build",
    description:
      "We design and construct customized homes that seamlessly align with your lifestyle, creating beautiful, functional spaces.",
    image: "/images/projects/cibt-office.jpg",
  },
  {
    title: "modern & customize furniture",
    description:
      "We design and manufacture modular, space-efficient furniture precisely tailored to your style, requirements, and space dimensions.",
    image: "/images/services/customizable-furniture-2.jpg",
  },
];

export default function WhatWeDoSection() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-black mb-10"
        >
          What We Do
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
          viewport={{ once: true }}
          className="text-gray-950 max-w-5xl mx-auto mb-10"
        >
          We provide end-to-end solutions in Architecture, Interior Designing,
          Construction, and Modular & Custom Furniture — all under one roof for
          a truly hassle-free experience. Our skilled team is dedicated to
          delivering high-quality results with precision and creativity, even
          within the most challenging timelines. Whether it’s a home, office, or
          commercial space, we bring your vision to life with efficiency and
          excellence.
        </motion.p>

        {/* Grid of Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group rounded-none overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold text-gray-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-900">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

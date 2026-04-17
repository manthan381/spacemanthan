"use client";

import { motion } from "framer-motion";
import { CheckSquare, Maximize, Sparkles, Star } from "lucide-react";

const stats = [
  {
    icon: Maximize,
    value: "80+",
    label: "Mn Sq. Ft.",
    sublabel: "Designed & Delivered",
  },
  {
    icon: Sparkles,
    value: "100+",
    label: "Award Winning",
    sublabel: "Projects",
  },
  {
    icon: Star,
    value: "98%",
    label: "Client Satisfaction",
    sublabel: "Rate",
  },
  {
    icon: CheckSquare,
    value: "15+",
    label: "Years of",
    sublabel: "Expertise",
  },
];

export function ImpactSection() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 tracking-tight">
            We <span className="font-bold">deliver</span> impact
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 relative">
                <stat.icon
                  className="w-12 h-12 text-gray-400 group-hover:text-gray-900 transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
                  {stat.value}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm md:text-base font-bold text-gray-700 uppercase tracking-wide">
                    {stat.label}
                  </span>
                  <span className="text-sm md:text-base text-gray-500 font-medium">
                    {stat.sublabel}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { CheckSquare, Maximize, Sparkles, Star } from "lucide-react";
import { useEffect, useRef } from "react";

const stats = [
  {
    icon: Maximize,
    value: "90",
    suffix: "+",
    label: "Mn Sq. Ft.",
    sublabel: "Designed & Delivered",
  },
  {
    icon: Sparkles,
    value: "100",
    suffix: "+",
    label: "Award Winning",
    sublabel: "Projects",
  },
  {
    icon: Star,
    value: "98",
    suffix: "%",
    label: "Client Satisfaction",
    sublabel: "Rate",
  },
  {
    icon: CheckSquare,
    value: "15",
    suffix: "+",
    label: "Years of",
    sublabel: "Expertise",
  },
];

function CountUp({ value, suffix }: { value: string; suffix: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, parseInt(value), {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, value]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function ImpactSection() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as const }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-black tracking-tight"
          >
            We <span className="font-bold">deliver</span> impact
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as const }}
              viewport={{ once: true }}
            >
              <div className="mb-6 relative">
                <stat.icon
                  className="w-12 h-12 text-gray-400 group-hover:text-gray-900 transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </div>
              <div className="flex flex-col items-center">
                <CountUp value={stat.value} suffix={stat.suffix} />
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

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";

interface GalleryCTASectionProps {
  titlePrefix: string;
  titleHighlight: string;
  subheading?: string;
  linkText: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

export function GalleryCTASection({
  titlePrefix,
  titleHighlight,
  subheading,
  linkText,
  href,
  imageSrc,
  imageAlt,
  reverse = false,
}: GalleryCTASectionProps) {
  return (
    <section className="py-12 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* Text Content */}
          <motion.div
            className={reverse ? "lg:order-2" : "lg:order-1"}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as const }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 leading-tight mb-4">
              {titlePrefix} <br />
              <span className="font-bold text-gray-950 uppercase tracking-tighter">
                {titleHighlight}
              </span>
            </h2>

            {subheading && (
              <p className="text-gray-600 mb-6 max-w-lg leading-relaxed text-sm md:text-base">
                {subheading}
              </p>
            )}

            <div className="pt-6 border-t border-gray-100">
              <Link
                href={href}
                className="group flex items-center gap-3 text-lg font-bold tracking-widest text-gray-600 hover:text-gray-900 transition-colors"
              >
                <span className="uppercase italic">{linkText}</span>
                <Play
                  size={16}
                  fill="currentColor"
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className={`relative ${reverse ? "lg:order-1" : "lg:order-2"}`}
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              {/* White Frame Overlay */}
              <div className="absolute inset-0 border-[12px] md:border-[20px] border-white z-10 pointer-events-none transform -translate-x-4 -translate-y-4 md:-translate-x-8 md:-translate-y-8 h-[calc(100%+32px)] md:h-[calc(100%+64px)] w-[calc(100%+32px)] md:w-[calc(100%+64px)] opacity-90" />
              
              <div className="relative aspect-[4/3] rounded-none overflow-hidden shadow-2xl">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            

          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TransformationStories() {
  return (
    <section className="relative h-[450px] md:h-[550px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with subtle parallax-ready positioning */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/home/2.3.jpeg"
          alt="Transformation Stories"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle dark overlay to make the white box pop more, though box is opaque */}
        <div className="absolute inset-0 bg-black/5" />
      </div>
      
      {/* Content Box */}
      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
        viewport={{ once: true }}
        className="relative z-10 bg-white/95 backdrop-blur-sm px-12 py-10 md:px-24 md:py-16 shadow-[0_20px_50px_rgba(0,0,0,0.1)] text-center border border-gray-100"
      >
        <h2 className="flex flex-col items-center">
          <span className="text-4xl md:text-6xl font-black text-black uppercase tracking-tight leading-tight">
            Transformation
          </span>
          <span className="text-3xl md:text-5xl font-light text-black tracking-normal mt-2">
            Stories
          </span>
        </h2>
      </motion.div>
    </section>
  );
}

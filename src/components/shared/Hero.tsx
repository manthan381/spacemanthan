"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[700px] w-full overflow-hidden">

      {/* Background Image with Ken Burns Zoom-In */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <Image
          src="/images/home/dd.webp"
          alt="Space Manthan - Premium Office Design"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Subtle gradient overlay — darkens bottom for text legibility */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />

      {/* Content — inline glass card, bottom-left */}
      <div className="relative z-20 w-full h-full flex flex-col justify-end pb-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto w-full">

          <motion.div
            className="bg-white/65 py-7 px-8 md:px-14 inline-block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] as const, delay: 0.6 }}
          >
            {/* Headline reveal */}
            <div className="overflow-hidden">
              <motion.h1
                className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-black"
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] as const, delay: 0.85 }}
              >
                One Vision. One Team. One Roof.
              </motion.h1>
            </div>

            {/* Divider draws itself */}
            <motion.div
              className="h-[2px] bg-black/20 mt-3 mb-3"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 1.3 }}
            />

            {/* Body text */}
            <motion.p
              className="text-sm md:text-base text-gray-800 max-w-md font-normal leading-relaxed"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 1.5 }}
            >
              One-Stop Solution for Architecture, Interiors, Construction &
              Custom Furnitures — All seamlessly managed and delivered hassle
              free with Precision and Excellence.
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

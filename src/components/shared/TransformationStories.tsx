"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function TransformationStories() {
  const sectionRef = useRef<HTMLElement>(null);

  // Track scroll progress as this section moves through the viewport
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // 0 = section bottom hits viewport bottom (just entering)
    // 1 = section center hits viewport center (settled in view)
    offset: ["start end", "center center"],
  });

  // Box starts 180px below, settles 100px below natural center for a "downward" feel
  const boxY = useTransform(scrollYProgress, [0, 1], [180, 100]);

  // Text line 1 starts further below (inside the box), rises slightly earlier
  const line1Y = useTransform(scrollYProgress, [0.05, 0.85], ["100%", "0%"]);

  // Text line 2 starts a bit later for natural stagger
  const line2Y = useTransform(scrollYProgress, [0.15, 0.95], ["100%", "0%"]);

  // Background image zooms out subtly as you scroll
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[460px] md:h-[540px] w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background Image with Scroll-Linked Parallax Zoom (Not Clickable) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <motion.div
          style={{ scale: bgScale }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/home/1.1.webp"
            alt="Transformation Stories"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>
      </div>

      {/* White box rises slowly into position as user scrolls */}
      <motion.div
        style={{ y: boxY }}
        className="relative z-10 bg-white/70 px-8 py-6 md:px-12 md:py-8 text-center min-w-[280px] shadow-xl"
      >
        {/* "Transformation" — reveals through overflow clip, scroll-linked */}
        <div className="overflow-hidden">
          <motion.p
            style={{ y: line1Y }}
            className="text-[2rem] md:text-[3.2rem] font-bold text-black leading-none tracking-tight"
          >
            Transformation
          </motion.p>
        </div>

        {/* "Stories" — same reveal, slightly delayed */}
        <div className="overflow-hidden mt-2">
          <motion.p
            style={{ y: line2Y }}
            className="text-[1.6rem] md:text-[2.6rem] font-light text-black leading-none"
          >
            Stories
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}

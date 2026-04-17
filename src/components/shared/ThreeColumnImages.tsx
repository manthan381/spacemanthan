"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type ColumnData = {
  imageSrc: string;
  title: string;
};

type ThreeColumnImagesProps = {
  heading: string;
  columns: ColumnData[];
};

export default function ThreeColumnImages({
  heading,
  columns,
}: ThreeColumnImagesProps) {
  return (
    <section className="pb-20 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {heading}
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {columns.map((col, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center gap-4 ${
              index % 2 === 1 ? "mt-20" : ""
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="w-72 h-72 rounded-none overflow-hidden border-2 border-gray-100">
              <Image
                src={col.imageSrc}
                alt={col.title}
                width={288}
                height={288}
                className="object-cover w-full h-full"
              />
            </div>
            <p
              className="text-2xl font-bold"
              dangerouslySetInnerHTML={{ __html: col.title }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

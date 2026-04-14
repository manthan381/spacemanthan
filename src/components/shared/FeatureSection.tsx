"use client";

import { motion } from "framer-motion";
import { Building, Hammer, Ruler } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: <Building size={64} className="text-primary" />,
    image: "/images/projects/red-velvet-office.jpg",
    title: `Office Design<br />& Build`,
    description:
      "We design intelligent workspaces with end-to-end solutions, from planning to execution, boosting productivity and reflecting your brand identity.",
  },
  {
    icon: <Hammer size={64} className="text-primary" />,
    image: "/images/projects/anm-45-46.jpg",
    title: "Residential & Commercial Interiors",
    description:
      "Our Interior design solutions blend style, comfort, and purpose for sophisticated residences and commercial spaces, executed with meticulous attention to detail.",
  },
  {
    icon: <Ruler size={64} className="text-primary" />,
    image: "/images/services/customizable-furniture-1.jpg",
    title: "Modular Office & Residential furnitures",
    description:
      "Our Modular furniture offers versatile, sophisticated, precision-engineered solutions for flexible, stylish, and functional environments.",
  },
];

export default function FeatureSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl text-gray-950 mb-4"
        >
          Why Choose <span className="font-bold">Space Manthan</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-900 text-lg max-w-6xl mx-auto mb-10"
        >
          Space Manthan specializes in delivering comprehensive, integrated
          solutions for exceptional space creation—ranging from Architecture and
          Interior Design to Construction and Modular Custom Furniture—all
          consolidated under a single entity. As an ISO 9001:2015 certified
          organization, we adhere to the highest standards of quality, safety,
          and precision across all projects. Employing advanced AI technology,
          we ensure accelerated, intelligent, and precise project delivery.
          Backed by a team of experienced professionals and a demonstrated
          history of on-time execution of prestigious projects, we transform
          your vision into reality with minimal complexity and maximum
          operational efficiency. By consolidating vendor management, we provide
          a cost-effective and streamlined experience, positioning Space Manthan
          as your reliable partner for end-to-end space solutions.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="mb-4 bg-gray-100 p-1 rounded-full inline-block">
                <div className="relative h-40 w-40">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-full"
                  />
                </div>
              </div>
              <h3
                className="text-xl font-bold text-gray-900 mb-2"
                dangerouslySetInnerHTML={{ __html: feature.title }}
              ></h3>
              <p className="text-gray-900">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

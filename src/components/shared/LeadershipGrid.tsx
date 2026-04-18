"use client";
import { motion } from "framer-motion";

const leadershipData = [
  {
    name: "Ar. Prince K. Kumar",
    title: "Principal Architect (Founder/Director)",
    education: "B. Arch",
    bio: "Prince's journey in architecture has been marked by dedication and talent right from the start. His hard work and passion have propelled him to immense success in just 5 years, and he's eager to continue rising in the future. His determination and vision are the keys to his bright career ahead in the field of architecture.",
  },
  {
    name: "Kajal Singh",
    title: "Director",
    education: "M. Comm",
    bio: "Kajal Singh, a Mass Communication expert, rises to prominence as Director of Space Manthan. Her inspiring journey from academia to leading a thriving design firm showcases the fusion of education, creativity, and entrepreneurship, driving excellence and innovation.",
  },
];

const Slash = () => (
  <div className="hidden md:flex items-center justify-center pointer-events-none select-none px-8">
    <div 
      className="w-[1px] h-32 bg-gray-300 origin-center" 
      style={{ transform: "rotate(25deg)" }}
    />
  </div>
);

export default function LeadershipGrid() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  return (
    <section className="bg-white py-8 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16"
        >
          {leadershipData.map((person, index) => (
            <div key={person.name} className="flex">
              <motion.div 
                variants={itemVariants}
                className="flex flex-col flex-1"
              >
                <h3 className="text-xl md:text-2xl font-bold text-black mb-1">
                  {person.name}
                </h3>
                <p className="text-sm md:text-base font-medium text-gray-700 mb-0.5">
                  {person.title}
                </p>
                <p className="text-xs md:text-sm text-gray-400 mb-6 uppercase tracking-widest font-light">
                  {person.education}
                </p>
                <div className="max-w-lg">
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed font-light">
                    {person.bio}
                  </p>
                </div>
              </motion.div>
              
              {/* Add slash between items, but not after the last one */}
              {index < leadershipData.length - 1 && <Slash />}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

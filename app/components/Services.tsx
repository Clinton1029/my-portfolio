"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Database, Brain } from "lucide-react";

const SERVICES = [
  {
    icon: <Code className="w-10 h-10 text-blue-400" />,
    title: "Software Engineering",
    description:
      "Building scalable, modern, and efficient applications using cutting-edge technologies.",
  },
  {
    icon: <Database className="w-10 h-10 text-purple-400" />,
    title: "Data Science",
    description:
      "Transforming raw data into actionable insights with advanced analytics and visualization.",
  },
  {
    icon: <Brain className="w-10 h-10 text-pink-400" />,
    title: "Machine Learning",
    description:
      "Designing intelligent models that drive automation, innovation, and smarter decisions.",
  },
];

export default function Services() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative z-10 min-h-screen flex flex-col items-center justify-center 
                 px-6 sm:px-12 py-20 bg-gradient-to-b from-slate-950 via-slate-900/80 to-black text-white"
    >
      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text 
                   bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg text-center mb-14"
      >
        My Services
      </motion.h2>

      {/* Services Grid */}
      <div className="grid gap-8 sm:gap-12 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
        {SERVICES.map((service, idx) => {
          const isActive = activeCard === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 35px rgba(59,130,246,1)",
              }}
              animate={{
                y: [0, -8, 0],
                transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                ...(isActive && {
                  scale: 1.1,
                  boxShadow: "0 0 35px rgba(59,130,246,1)",
                  background:
                    "linear-gradient(to right, rgba(59,130,246,0.25), rgba(168,85,247,0.25), rgba(236,72,153,0.25))",
                }),
              }}
              onClick={() => setActiveCard(isActive ? null : idx)} // toggle on mobile
              className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 
                         shadow-lg flex flex-col items-center text-center transition-all duration-300
                         hover:bg-gradient-to-r hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20 cursor-pointer"
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

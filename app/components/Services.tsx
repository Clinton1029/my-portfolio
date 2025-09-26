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

const ENTRY_VARIANTS = [
  { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } },
  { hidden: { opacity: 0, y: 80 }, visible: { opacity: 1, y: 0 } },
  { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 } },
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
      {/* Premium Section Header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative mb-20 text-center"
      >
        <h2
          className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text 
                     bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]"
        >
          My Services
        </h2>
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 shadow-lg shadow-purple-500/40" />
      </motion.div>

      {/* Services Grid */}
      <div className="grid gap-8 sm:gap-12 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
        {SERVICES.map((service, idx) => {
          const isActive = activeCard === idx;
          return (
            <motion.div
              key={idx}
              variants={ENTRY_VARIANTS[idx % ENTRY_VARIANTS.length]}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: idx * 0.3, ease: "easeOut" }}
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
              onClick={() => setActiveCard(isActive ? null : idx)}
              className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 
                         shadow-lg flex flex-col items-center text-center transition-all duration-300
                         hover:bg-gradient-to-r hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20 cursor-pointer"
            >
              {/* Pulsing Icon */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0px rgba(255,255,255,0)",
                    "0 0 25px rgba(59,130,246,0.8)",
                    "0 0 0px rgba(255,255,255,0)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="mb-6 rounded-full p-4"
              >
                {service.icon}
              </motion.div>

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

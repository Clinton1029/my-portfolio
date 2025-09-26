"use client";

import { motion } from "framer-motion";
import { Brain, Code, BarChart3 } from "lucide-react"; // Icons

const SERVICES = [
  {
    icon: <BarChart3 className="w-10 h-10 text-blue-400" />,
    title: "Data Science",
    desc: "Transforming raw data into meaningful insights with advanced analytics, dashboards, and visualization.",
  },
  {
    icon: <Brain className="w-10 h-10 text-purple-400" />,
    title: "Machine Learning & AI",
    desc: "Building intelligent predictive models and AI-driven solutions to solve real-world challenges.",
  },
  {
    icon: <Code className="w-10 h-10 text-pink-400" />,
    title: "Software Development",
    desc: "Designing scalable web & mobile applications, APIs, and automation systems for future-ready businesses.",
  },
];

export default function Services() {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative min-h-screen flex flex-col items-center justify-center 
                 px-6 sm:px-12 py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text 
                   bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg mb-16"
      >
        My Services
      </motion.h2>

      {/* Services Grid */}
      <div className="max-w-6xl w-full grid md:grid-cols-3 gap-10">
        {SERVICES.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: idx * 0.2 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 35px rgba(59,130,246,0.8)",
            }}
            whileTap={{ scale: 0.97 }}
            className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 
                       shadow-lg flex flex-col items-center text-center transition-all duration-300
                       hover:bg-gradient-to-r hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20"
          >
            <div className="mb-6">{service.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

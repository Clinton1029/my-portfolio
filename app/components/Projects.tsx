"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "Data Analytics Dashboard",
    description:
      "Analyzed global economic trends and presented findings to highlight key macroeconomic patterns.",
    image: "/dashboard.webp",
    tech: ["Python", "SQL"],
    live: "https://your-live-demo-link.com",
    code: "https://github.com/Clinton1029/Global-Economic-Analysis",
  },
  {
    title: "E-commerce Web App",
    description:
      "A scalable e-commerce platform built with Django, PostgreSQL, and Tailwind CSS.",
    image: "/ecommerce.jpg",
    tech: ["Django", "PostgreSQL", "Tailwind"],
    live: "https://your-live-demo-link.com",
    code: "https://github.com/your-repo",
  },
  {
    title: "Machine Learning Model",
    description:
      "A predictive model for customer churn analysis using TensorFlow and Scikit-learn.",
    image: "/ml-model.jpg",
    tech: ["TensorFlow", "Python", "Pandas"],
    live: "https://your-live-demo-link.com",
    code: "https://github.com/your-repo",
  },
];

export default function Projects() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative z-10 min-h-screen flex flex-col items-center justify-center 
                 px-6 sm:px-12 py-20 bg-gradient-to-b from-slate-950 via-slate-900/80 to-black text-white"
    >
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text 
                   bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg text-center mb-16"
      >
        My Projects
      </motion.h2>

      {/* Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
        {PROJECTS.map((project, idx) => {
          const isActive = activeCard === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 35px rgba(59,130,246,0.9)",
              }}
              animate={
                isActive
                  ? {
                      scale: 1.05,
                      boxShadow: "0 0 35px rgba(59,130,246,0.9)",
                      background:
                        "linear-gradient(to right, rgba(59,130,246,0.2), rgba(168,85,247,0.2), rgba(236,72,153,0.2))",
                    }
                  : {}
              }
              onClick={() => setActiveCard(isActive ? null : idx)} // tap to glow on mobile
              className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 
                         shadow-lg overflow-hidden flex flex-col transition-all duration-300
                         hover:bg-gradient-to-r hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20"
            >
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm flex-1">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 my-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-white/10 text-xs sm:text-sm text-gray-200 border border-white/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg 
                               bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-medium
                               shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" /> View Project
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg 
                               bg-white/10 border border-white/20 text-gray-200 font-medium
                               shadow-md hover:bg-white/20 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

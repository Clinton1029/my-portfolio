"use client";

import { motion } from "framer-motion";
import {
  Database,
  BarChart,
  Cloud,
  GitBranch,
  FileCode,
  Terminal,
  LineChart,
  Code,
  Globe,
  Layers,
  Layout,
  Braces,
  Rocket,
  Server,
} from "lucide-react";

const DATA_SCIENCE = [
  { icon: <Braces className="w-10 h-10 text-yellow-400" />, name: "Python" },
  { icon: <Database className="w-10 h-10 text-blue-400" />, name: "MySQL" },
  { icon: <Database className="w-10 h-10 text-indigo-400" />, name: "PostgreSQL" },
  { icon: <BarChart className="w-10 h-10 text-orange-400" />, name: "Tableau" },
  { icon: <BarChart className="w-10 h-10 text-green-400" />, name: "Power BI" },
  { icon: <GitBranch className="w-10 h-10 text-red-400" />, name: "Git & GitHub" },
  { icon: <FileCode className="w-10 h-10 text-gray-300" />, name: "MS Office" },
  { icon: <Rocket className="w-10 h-10 text-pink-400" />, name: "DataOps" },
  { icon: <Cloud className="w-10 h-10 text-blue-500" />, name: "MS Azure" },
  { icon: <Terminal className="w-10 h-10 text-purple-400" />, name: "VS Code" },
  { icon: <Server className="w-10 h-10 text-teal-400" />, name: "Jupyter Notebook" },
];

const WEB_DEV = [
  { icon: <Code className="w-10 h-10 text-orange-400" />, name: "HTML" },
  { icon: <Layout className="w-10 h-10 text-blue-400" />, name: "CSS" },
  { icon: <Layers className="w-10 h-10 text-cyan-400" />, name: "Tailwind CSS" },
  { icon: <Layers className="w-10 h-10 text-purple-400" />, name: "Bootstrap" },
  { icon: <FileCode className="w-10 h-10 text-yellow-300" />, name: "JavaScript" },
  { icon: <Braces className="w-10 h-10 text-blue-500" />, name: "TypeScript" },
  { icon: <Server className="w-10 h-10 text-green-400" />, name: "Django" },
];

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative z-10 min-h-screen flex flex-col items-center justify-center 
                 px-6 sm:px-12 py-20 bg-gradient-to-b from-black via-slate-900/80 to-slate-950 text-white"
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
        My Skills
      </motion.h2>

      <div className="w-full max-w-7xl grid gap-16">
        {/* Data Science & Tools */}
        <div>
          <h3 className="text-2xl font-semibold text-center sm:text-left mb-8 text-blue-400">
            🧠 Data Science & Tools
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {DATA_SCIENCE.map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 30px rgba(59,130,246,0.8)",
                }}
                whileTap={{ scale: 0.95 }}
                className="p-5 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 
                           shadow-lg flex flex-col items-center justify-center text-center
                           transition-all duration-300 hover:bg-gradient-to-r 
                           hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20"
              >
                {skill.icon}
                <p className="mt-3 text-sm sm:text-base font-medium text-gray-200">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Web Development */}
        <div>
          <h3 className="text-2xl font-semibold text-center sm:text-left mb-8 text-pink-400">
            💻 Web Development
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {WEB_DEV.map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 30px rgba(236,72,153,0.8)",
                }}
                whileTap={{ scale: 0.95 }}
                className="p-5 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 
                           shadow-lg flex flex-col items-center justify-center text-center
                           transition-all duration-300 hover:bg-gradient-to-r 
                           hover:from-pink-500/20 hover:via-purple-500/20 hover:to-blue-500/20"
              >
                {skill.icon}
                <p className="mt-3 text-sm sm:text-base font-medium text-gray-200">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

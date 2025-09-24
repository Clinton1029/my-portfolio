"use client";

import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback, useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiChevronDown } from "react-icons/hi";

export default function Hero() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  const roles = ["Data Scientist", "Data Analyst", "Software Engineer"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative grid grid-rows-[auto,1fr,auto] h-screen px-4 sm:px-6 py-6 text-center 
                 bg-gradient-to-br from-[#0a0f1f] via-[#0f172a] to-black overflow-hidden"
    >
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
            modes: { repulse: { distance: 120, duration: 0.4 } },
          },
          particles: {
            color: { value: "#00d4ff" },
            links: { enable: true, color: "#ffffff", distance: 150, opacity: 0.3 },
            move: { enable: true, speed: 0.3 }, // 🔥 Slower movement
            number: {
              value: 60,
              density: { enable: true, area: 800 }, // 🔥 Responsive density
            },
            opacity: { value: 0.4 },
            size: { value: { min: 1, max: 4 } },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Top Section */}
      <div className="relative z-10 flex flex-col items-center space-y-4 pt-14 sm:pt-16">
        {/* Profile Image with Glowing Border */}
        <div className="relative">
          {/* Glowing Gradient Ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 
                          blur-lg opacity-70 animate-pulse"></div>

          {/* Actual Image */}
          <motion.img
            src="/profile.jpg"
            alt="Clinton Yade"
            className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 
                       rounded-full border-4 border-white shadow-xl object-cover 
                       hover:scale-105 transition-transform duration-300"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight 
                     bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
                     bg-clip-text text-transparent drop-shadow-lg"
        >
          Hi, I’m Clinton Yade
        </motion.h1>

        {/* Rotating Role */}
        <div className="h-6 sm:h-8 md:h-10 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h2
              key={roles[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-sm sm:text-base md:text-lg text-blue-300 font-medium"
            >
              {roles[index]}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="max-w-md sm:max-w-xl text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base"
        >
          Passionate about turning <span className="text-blue-400">data</span>{" "}
          into <span className="text-purple-400">solutions</span> that drive{" "}
          <span className="text-pink-400">innovation</span>.
        </motion.p>
      </div>

      {/* Middle Section: Stats + Buttons */}
      <div className="relative z-10 flex flex-col items-center space-y-4 justify-center">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex gap-3 sm:gap-5 text-gray-200 flex-wrap justify-center"
        >
          {[
            { label: "Years Exp.", value: "1+", color: "text-blue-400" },
            { label: "Projects", value: "5+", color: "text-purple-400" },
            { label: "Clients", value: "2+", color: "text-pink-400" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-lg rounded-lg px-3 py-2 sm:px-4 sm:py-2 shadow-md 
                         hover:scale-105 transition-transform"
            >
              <span className={`text-sm sm:text-lg md:text-xl font-bold ${stat.color}`}>
                {stat.value}
              </span>
              <p className="text-xs sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Smaller Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-2"
        >
          <a
            href="#projects"
            className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                       text-white font-semibold shadow-md hover:scale-105 transition-transform text-xs sm:text-sm"
          >
            View My Work
          </a>
          <a
            href="/cv.pdf"
            className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-md border border-blue-400 text-blue-300 font-semibold 
                       shadow-md hover:bg-blue-400 hover:text-white transition text-xs sm:text-sm"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Bottom Section: Social Icons + Scroll Arrow */}
      <div className="relative z-10 flex flex-col items-center space-y-4 pt-6 pb-4">
        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex gap-4 sm:gap-6 flex-wrap justify-center"
        >
          <a
            href="https://github.com"
            target="_blank"
            className="p-2 sm:p-3 bg-white/10 rounded-full hover:scale-110 transition"
          >
            <FaGithub className="text-lg sm:text-xl md:text-2xl text-black" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="p-2 sm:p-3 bg-white/10 rounded-full hover:scale-110 transition"
          >
            <FaLinkedin className="text-lg sm:text-xl md:text-2xl text-blue-600" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="p-2 sm:p-3 bg-white/10 rounded-full hover:scale-110 transition"
          >
            <FaTwitter className="text-lg sm:text-xl md:text-2xl text-sky-400" />
          </a>
        </motion.div>

        {/* Scroll Down Arrow */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
          <a href="#about">
            <HiChevronDown className="text-lg sm:text-xl md:text-2xl text-blue-400 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

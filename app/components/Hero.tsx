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
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDownload = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-transparent">
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
            move: { enable: true, speed: 0.4 },
            number: { value: 60 },
            opacity: { value: 0.4 },
            size: { value: { min: 1, max: 4 } },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Inner Grid Content */}
      <div
        className="relative grid grid-rows-[auto,1fr,auto] h-screen px-4 sm:px-6 py-6 
                   text-center bg-transparent overflow-hidden z-10"
      >
        {/* ✅ Toast */}
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ x: 300, opacity: 0, scale: 0.9 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ x: 300, opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="fixed top-6 right-6 px-5 py-3 rounded-xl shadow-xl z-50 
                         bg-gradient-to-r from-blue-500/80 via-purple-500/80 to-pink-500/80
                         backdrop-blur-md border border-white/20 text-white font-semibold text-sm sm:text-base
                         flex items-center gap-2"
            >
              ✨ CV is downloading...
            </motion.div>
          )}
        </AnimatePresence>

        {/* 🔝 Top Section */}
        <div className="flex flex-col items-center space-y-4 pt-14 sm:pt-16">
          <motion.img
            src="/profile.jpg"
            alt="Clinton Yade"
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 
                       rounded-full border-4 border-white shadow-xl object-cover 
                       hover:scale-105 transition-transform duration-300"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />

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

        {/* 🔹 Middle Section */}
        <div className="flex flex-col items-center space-y-6 justify-center">
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

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4"
          >
            <a
              href="#projects"
              className="relative px-3 py-1.5 sm:px-4 sm:py-2 rounded-md 
                         bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                         text-white font-semibold shadow-md hover:scale-105 transition-transform text-xs sm:text-sm"
            >
              View My Work
              <span className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-md opacity-40 -z-10"></span>
            </a>

            <a
              href="/my resume.pdf"
              download
              onClick={handleDownload}
              className="relative px-3 py-1.5 sm:px-4 sm:py-2 rounded-md border border-blue-400 
                         text-blue-300 font-semibold shadow-md hover:bg-blue-400 hover:text-white 
                         transition text-xs sm:text-sm"
            >
              Download CV
              <span className="absolute inset-0 rounded-md bg-blue-400 blur-md opacity-30 -z-10"></span>
            </a>
          </motion.div>
        </div>

        {/* 🔻 Bottom Section */}
        <div className="flex flex-col items-center space-y-3 pt-4 pb-2">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.7 }}
            className="text-sm sm:text-base md:text-lg font-semibold text-gray-300 relative"
          >
            Follow Me
            <motion.span
              className="absolute -inset-1 blur-md bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-40 rounded-lg"
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.9 }}
            className="flex gap-4 sm:gap-6 flex-wrap justify-center"
          >
            {[
              { icon: <FaGithub />, link: "https://github.com/Clinton1029", color: "text-black" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/clinton-yade-95b01a342/", color: "text-blue-600" },
              { icon: <FaTwitter />, link: "https://twitter.com", color: "text-sky-400" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileTap={{ scale: 0.8, rotate: -10 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="p-2 sm:p-3 bg-white/10 rounded-full shadow-lg transition relative"
              >
                <span className="absolute inset-0 blur-md bg-white opacity-20 rounded-full"></span>
                <div className={`relative z-10 text-lg sm:text-xl md:text-2xl ${social.color}`}>
                  {social.icon}
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>
            <a href="#about">
              <HiChevronDown className="text-lg sm:text-xl md:text-2xl text-blue-400 animate-bounce" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

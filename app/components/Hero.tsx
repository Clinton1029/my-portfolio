"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 
      bg-gradient-to-br from-gray-50 via-white to-blue-50 
      dark:from-gray-900 dark:via-gray-950 dark:to-blue-950 
      transition-colors duration-500 overflow-hidden"
    >
      {/* Background floating blobs (light/dark adaptive) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15, y: [0, -60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-52 h-52 
        bg-blue-300 dark:bg-cyan-500 
        rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15, y: [0, 60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-64 h-64 
        bg-purple-400 dark:bg-fuchsia-600 
        rounded-full blur-3xl"
      />

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl 
        border-4 border-white dark:border-gray-800 
        bg-gradient-to-tr from-blue-600 to-purple-600 p-1"
      >
        <Image
          src="/profile.jpg"
          alt="Clinton Yade"
          fill
          sizes="(max-width: 768px) 200px, 300px"
          className="rounded-full object-cover"
        />
      </motion.div>

      {/* Text Content */}
      <div className="mt-8 md:mt-0 md:ml-12 text-center md:text-left max-w-xl z-10">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100"
        >
          Hi, I’m{" "}
          <span className="text-blue-600 dark:text-blue-400">Clinton Yade</span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 h-8"
        >
          <TypeAnimation
            sequence={[
              "Data Scientist", 4000,
              "Software Engineer", 4000,
              "Data Analyst", 4000,
              "Problem Solver", 4000,
            ]}
            wrapper="span"
            speed={30}
            repeat={Infinity}
            className="font-medium text-blue-600 dark:text-blue-400"
          />
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 
            dark:bg-blue-500 dark:hover:bg-blue-600 transition shadow-md"
          >
            View My Work
          </a>
          <a
            href="/Clinton_Yade_CV.pdf"
            download
            className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 
            dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950 transition"
          >
            Download CV
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-8 flex gap-6 justify-center md:justify-start text-2xl text-gray-600 dark:text-gray-300"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaTwitter />
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.9, y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 text-blue-600 dark:text-blue-400"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}

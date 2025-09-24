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
      bg-gradient-to-br from-gray-900 via-gray-950 to-blue-950 
      text-white overflow-hidden"
    >
      {/* Animated background gradient blobs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15, x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15, x: [0, -60, 0], y: [0, 60, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-[28rem] h-[28rem] bg-purple-600 rounded-full blur-3xl"
      />

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl 
        border-4 border-transparent bg-gradient-to-tr from-blue-500 to-purple-600 p-[3px]"
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
      <div className="mt-8 md:mt-0 md:ml-16 text-center md:text-left max-w-xl z-10">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold whitespace-nowrap"
        >
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Clinton Yade
          </span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-4 text-lg md:text-2xl h-10"
        >
          <TypeAnimation
            sequence={[
              "Data Scientist", 4000,
              "Software Engineer", 4000,
              "Data Analyst", 4000,
              "Problem Solver", 4000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
            className="font-medium text-blue-400"
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
            className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:shadow-lg hover:scale-105 
            transition-transform duration-300"
          >
            View My Work
          </a>
          <a
            href="/Clinton_Yade_CV.pdf"
            download
            className="px-6 py-3 rounded-lg border border-blue-400 text-blue-400 hover:bg-blue-500/10 
            transition-colors duration-300"
          >
            Download CV
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-8 flex gap-6 justify-center md:justify-start text-2xl"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
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
        className="absolute bottom-8 text-blue-400"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}

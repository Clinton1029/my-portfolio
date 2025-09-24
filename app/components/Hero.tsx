"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 bg-gradient-to-br from-gray-50 via-white to-blue-50"
    >
      {/* Profile Image with glow border */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-transparent bg-gradient-to-tr from-blue-600 to-purple-600 p-1"
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
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-8 md:mt-0 md:ml-12 text-center md:text-left max-w-xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          Hi, I’m <span className="text-blue-600">Clinton Yade</span>
        </h1>

        {/* Animated typing effect (optional with CSS) */}
        <p className="mt-4 text-lg md:text-xl text-gray-700">
          <span className="font-medium text-blue-600">
            Data Scientist • Software Engineer • Problem Solver
          </span>
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
          >
            View My Work
          </a>
          <a
            href="/Clinton_Yade_CV.pdf"
            download
            className="px-6 py-3 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
          >
            Download CV
          </a>
        </div>
      </motion.div>
    </section>
  );
}

 

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-40 h-40 md:w-56 md:h-56 relative rounded-full overflow-hidden shadow-lg"
      >
        <Image
          src="/images/profile.jpg"
          alt="Clinton Yade"
          fill
          sizes="(max-width: 768px) 150px, 250px"
          className="object-cover"
        />
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold">
          Hi, I’m <span className="text-blue-600">Clinton Yade</span>
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600">
          Data Scientist • Software Engineer • Problem Solver
        </p>
        <a
          href="#projects"
          className="inline-block mt-6 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </motion.div>
    </section>
  );
}

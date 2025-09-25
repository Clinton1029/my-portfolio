"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 py-16 bg-gradient-to-b from-black via-[#0a0f1f] to-[#0f172a]"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/profile.jpg"
            alt="Clinton Yade"
            className="w-56 h-56 sm:w-72 sm:h-72 rounded-2xl object-cover shadow-2xl border-4 border-white/20 hover:scale-105 transition"
          />
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center md:text-left space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            About Me
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            I’m <span className="text-blue-400 font-semibold">Clinton Yade</span>, 
            a passionate <span className="text-purple-400">Data Scientist</span> 
            and <span className="text-pink-400">Software Engineer</span> who loves 
            solving complex problems through technology and data-driven insights. 
            My mission is to build intelligent systems that drive innovation and 
            create meaningful impact.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {["Data Science", "Machine Learning", "Software Engineering"].map((skill, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg text-gray-200 text-sm shadow-md border border-white/20"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Optional CV Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="/my resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg mt-4"
          >
            View CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

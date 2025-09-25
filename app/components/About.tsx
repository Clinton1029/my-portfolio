"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative min-h-screen flex items-center justify-center 
                 px-6 sm:px-12 py-16 sm:py-20 bg-gradient-to-b 
                 from-transparent via-slate-900/60 to-slate-950 text-white"
    >
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left - Floating Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.img
            src="/coding image.jpeg"
            alt="Clinton Yade"
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-2xl object-cover 
                       shadow-[0_0_40px_rgba(96,165,250,0.4)] border-4 border-white/20"
            animate={{
              y: [0, -12, 0],
              scale: [1, 1.03, 1], // sync pulse with skills
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Right - Text & Skills */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center md:text-left space-y-8"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text 
                         bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg">
            About Me
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            I’m <span className="text-blue-400 font-semibold">Clinton Yade</span>, 
            a <span className="text-purple-400 font-semibold">Data Scientist</span> 
            and <span className="text-pink-400 font-semibold">Software Engineer</span>.  
            I specialize in transforming data into actionable insights and building 
            intelligent, future-ready software solutions. My mission is to deliver 
            <span className="text-blue-400"> premium technology</span> that drives 
            innovation and creates lasting impact.
          </p>

          {/* Skill Tags */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {["Data Scientist", "Software Engineer", "Machine Learning"].map(
              (skill, idx) => (
                <motion.span
                  key={idx}
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0 0 20px rgba(59,130,246,0.6)", // glow on hover
                  }}
                  whileTap={{
                    scale: 0.95,
                    boxShadow: "0 0 25px rgba(168,85,247,0.8)", // stronger glow on mobile tap
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  animate={{
                    scale: [1, 1.05, 1], // subtle pulse
                  }}
                  className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-lg text-gray-200 
                             text-sm sm:text-base shadow-lg border border-white/20 
                             hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 
                             hover:text-white transition duration-300"
                >
                  {skill}
                </motion.span>
              )
            )}
          </div>

          {/* View CV Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/my resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 
                       via-purple-500 to-pink-500 text-white font-semibold 
                       mt-4 sm:mt-2 md:mt-6
                       shadow-[0_0_25px_rgba(96,165,250,0.5)] hover:shadow-[0_0_40px_rgba(167,139,250,0.8)] 
                       transition duration-300"
          >
            View CV
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r 
                             from-blue-500 via-purple-500 to-pink-500 blur-md opacity-40 -z-10"></span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}

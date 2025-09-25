"use client";

import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function About() {
  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 py-24 
                 bg-gradient-to-b from-black via-[#0a0f1f] to-[#0f172a] overflow-hidden"
    >
      {/* Particles background */}
      <Particles
        id="tsparticles-about"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
            modes: { repulse: { distance: 120, duration: 0.4 } },
          },
          particles: {
            color: { value: ["#60A5FA", "#A78BFA", "#F472B6"] },
            links: {
              enable: true,
              color: "#ffffff",
              distance: 150,
              opacity: 0.25,
              width: 1,
            },
            move: { enable: true, speed: 0.4 },
            number: { value: 70 },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 4 } },
          },
        }}
        className="absolute inset-0 -z-10"
      />

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
                       shadow-[0_0_40px_rgba(167,139,250,0.4)] border-4 border-white/20"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            I’m <span className="text-blue-400 font-semibold">Clinton Yade</span>, 
            a <span className="text-purple-400 font-semibold">Data Scientist</span> 
            and <span className="text-pink-400 font-semibold">Software Engineer</span>.  
            I specialize in transforming data into actionable insights and building 
            intelligent software solutions. My passion lies in delivering premium, 
            future-ready technology that pushes boundaries and drives innovation.
          </p>

          {/* Skill Tags */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {["Data Scientist", "Software Engineer", "Machine Learning"].map((skill, idx) => (
              <motion.span
                key={idx}
                whileHover={{ scale: 1.15 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-lg text-gray-200 
                           text-sm sm:text-base shadow-lg border border-white/20 
                           hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 
                           hover:text-white transition"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* View CV Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/my resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 
                       via-purple-500 to-pink-500 text-white font-semibold mt-6
                       shadow-[0_0_25px_rgba(147,51,234,0.5)] hover:shadow-[0_0_40px_rgba(147,51,234,0.8)] 
                       transition duration-300"
          >
            View CV
            <span className="absolute inset-0 rounded-lg bg-gradient-to-r 
                             from-blue-500 via-purple-500 to-pink-500 blur-md opacity-40 -z-10"></span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

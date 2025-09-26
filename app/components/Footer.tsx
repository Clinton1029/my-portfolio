"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
      {/* 🔹 Curved Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-[calc(100%+1.3px)] h-16"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M985.66,92.83C906.67,72,823,31,743,14.19c-82-17.34-168,0.19-250,22.77S325.33,77,245.34,95.81C163,115,81,115,0,95.81V0H1200V95.81C1118.91,115,1044.65,113.67,985.66,92.83Z"
            className="fill-slate-950"
          ></path>
        </svg>
      </div>

      {/* 🔹 Footer Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative px-6 sm:px-12 py-16 max-w-7xl mx-auto text-center"
      >
        {/* Branding */}
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
          Clinton Yade
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-sm sm:text-base">
          Crafting data-driven solutions and modern software with precision and passion.
        </p>

        {/* 🔹 Socials with Brand Colors + Glow */}
        <div className="flex justify-center gap-6 mb-10">
          {/* GitHub */}
          <a
            href="https://github.com/Clinton1029"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-md
                       transition-transform duration-300 ease-out hover:scale-110"
          >
            <Github
              className="w-6 h-6"
              style={{ color: "#ffffff" }} // GitHub brand (white)
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-md
                       transition-transform duration-300 ease-out hover:scale-110
                       hover:shadow-[0_0_25px_rgba(10,102,194,0.9)]"
          >
            <Linkedin
              className="w-6 h-6"
              style={{ color: "#0A66C2" }} // LinkedIn blue
            />
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-md
                       transition-transform duration-300 ease-out hover:scale-110
                       hover:shadow-[0_0_25px_rgba(29,155,240,0.9)]"
          >
            <Twitter
              className="w-6 h-6"
              style={{ color: "#1DA1F2" }} // Twitter blue
            />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs sm:text-sm">
          © {new Date().getFullYear()} Clinton Yade. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold text-blue-600">Clinton Yade</div>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-6">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md border border-gray-300"
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-white px-6 py-6 flex flex-col space-y-4 shadow-lg"
          >
            {LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-blue-600 transition"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

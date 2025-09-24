"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for shadow + active link
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Scrollspy logic
      const offsets = LINKS.map((link) => {
        const el = document.getElementById(link.id);
        if (!el) return { id: link.id, top: 0 };
        return { id: link.id, top: el.offsetTop - 120 };
      });

      const scrollPos = window.scrollY;
      const current = offsets
        .reverse()
        .find((section) => scrollPos >= section.top);

      if (current) setActive(current.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-slate-900/95 shadow-lg"
          : "bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold text-white tracking-wide">
          Clinton Yade
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-8">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition-colors ${
                active === link.id
                  ? "text-blue-400 font-semibold"
                  : "text-gray-200 hover:text-blue-400"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          ☰
        </button>
      </div>

      {/* Mobile sidebar drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Slide-in drawer */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-slate-900 p-6 flex flex-col space-y-6 md:hidden shadow-xl"
            >
              {LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`text-lg transition-colors ${
                    active === link.id
                      ? "text-blue-400 font-semibold"
                      : "text-gray-200 hover:text-blue-400"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

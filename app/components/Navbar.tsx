"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  // ✅ Track scroll position for shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Scrollspy logic
      const offsets = LINKS.map((link) => {
        const el = document.getElementById(link.id);
        if (!el) return { id: link.id, top: 0 };
        return { id: link.id, top: el.offsetTop - 100 };
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
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-shadow ${
        scrolled ? "bg-white/90 shadow-md" : "bg-white/70"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">Clinton Yade</div>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-6">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition ${
                active === link.id
                  ? "text-blue-600 font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
        >
          ☰
        </button>
      </div>

      {/* Mobile sidebar drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Dark overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Slide-in menu */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white shadow-lg p-6 flex flex-col space-y-6 md:hidden"
            >
              {LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`text-lg transition ${
                    active === link.id
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700 hover:text-blue-600"
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

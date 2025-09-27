"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo({ top: 0, behavior: "instant" });
      setActive("hero");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPos = window.scrollY + 150;
      let current = "hero";

      for (const link of LINKS) {
        const el = document.getElementById(link.id);
        if (el && el.offsetTop <= scrollPos) {
          current = link.id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setActive(id);
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div
          className="text-2xl font-extrabold tracking-wide bg-gradient-to-r 
          from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text cursor-pointer"
          onClick={() => handleNavClick("hero")}
        >
          Clinton Yade
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-10">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`relative font-medium transition-colors ${
                active === link.id
                  ? "text-blue-400"
                  : "text-gray-200 hover:text-blue-400"
              }`}
            >
              {link.label}
              {active === link.id && (
                <motion.span
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-400 rounded-full"
                />
              )}
            </button>
          ))}
        </nav>

        {/* ✅ Mobile hamburger with glow */}
        <motion.button
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden flex flex-col justify-between w-8 h-6 focus:outline-none"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block w-full h-[3px] bg-white rounded 
                       shadow-[0_0_8px_#3b82f6,0_0_15px_#60a5fa] 
                       hover:shadow-[0_0_12px_#60a5fa,0_0_20px_#93c5fd] transition-all duration-300"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="block w-full h-[3px] bg-white rounded 
                       shadow-[0_0_8px_#3b82f6,0_0_15px_#60a5fa] 
                       hover:shadow-[0_0_12px_#60a5fa,0_0_20px_#93c5fd] transition-all duration-300"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block w-full h-[3px] bg-white rounded 
                       shadow-[0_0_8px_#3b82f6,0_0_15px_#60a5fa] 
                       hover:shadow-[0_0_12px_#60a5fa,0_0_20px_#93c5fd] transition-all duration-300"
          />
        </motion.button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* ✅ Drawer with glowing X button */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-sm 
                         bg-gradient-to-br from-[#0a0f1f] via-[#0f172a] to-[#000814] 
                         backdrop-blur-lg p-8 flex flex-col space-y-8 md:hidden shadow-2xl border-l border-white/10"
            >
              {/* Close button inside */}
              <motion.button
                onClick={() => setOpen(false)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 
                           hover:bg-white/20 text-white transition shadow-lg"
              >
                <X className="w-7 h-7 text-white 
                              drop-shadow-[0_0_10px_#3b82f6,0_0_20px_#60a5fa] 
                              hover:drop-shadow-[0_0_15px_#60a5fa,0_0_25px_#93c5fd] 
                              transition-all duration-300" />
              </motion.button>

              <div className="text-xl font-bold text-white mt-10">Menu</div>
              {LINKS.map((link, idx) => (
                <motion.button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`text-lg text-left transition-colors ${
                    active === link.id
                      ? "text-blue-400 font-semibold"
                      : "text-gray-300 hover:text-blue-400"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

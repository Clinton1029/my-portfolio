"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((window.scrollY / (total || 1)) * 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // IntersectionObserver for active link
    const sections = Array.from(document.querySelectorAll("section[id]"));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.45 }
    );
    sections.forEach((s) => obs.observe(s));

    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition`}>
      <div
        className={`backdrop-blur-md bg-white/60 border-b border-white/10 max-w-6xl mx-auto px-6 py-3 flex items-center justify-between rounded-b-lg shadow-sm ${scrolled ? "backdrop-blur-sm" : ""
          }`}
      >
        <div className="text-lg font-bold text-blue-600">Clinton Yade</div>

        <nav className="hidden md:flex gap-6">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`py-1 px-2 text-sm rounded-md transition ${active === l.id ? "text-blue-600 font-semibold" : "text-slate-700 hover:text-blue-600"
                }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="md:hidden text-sm text-slate-700">Menu</div>
      </div>

      {/* scroll progress */}
      <div className="h-0.5 bg-transparent">
        <div
          aria-hidden
          style={{ width: `${progress}%` }}
          className="h-0.5 bg-blue-600 transition-all"
        />
      </div>
    </header>
  );
}

"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Hello World</h1>
      </section>
    </main>
  );
}
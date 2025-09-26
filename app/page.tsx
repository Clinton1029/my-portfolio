"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
    </main>
  );
}
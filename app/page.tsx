"use client";

import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">Hello World</h1>
      </section>
    </main>
  );
}
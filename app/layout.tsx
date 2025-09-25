import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "next-themes";
import BackgroundParticles from "./components/BackgroundParticles";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Clinton Yade — Data Scientist & Software Engineer",
  description: "Portfolio of Clinton Yade — Data Scientist & Software Engineer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-gradient-to-b from-black via-[#0a0f1f] to-[#0f172a] text-white overflow-x-hidden">
        {/* 🔑 Global particles, shared across all pages */}
        <BackgroundParticles />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
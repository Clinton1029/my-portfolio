"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess("❌ Failed to send message. Try again.");
      }
    } catch (err) {
      setSuccess("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative z-10 min-h-screen flex flex-col items-center justify-center 
                 px-6 sm:px-12 py-20 bg-gradient-to-b from-black via-slate-900 to-slate-950 text-white"
    >
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text 
                   bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-lg text-center mb-16"
      >
        Get In Touch
      </motion.h2>

      <div className="grid gap-12 lg:grid-cols-2 w-full max-w-6xl">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <p className="text-gray-300 text-lg">
            Whether you have a project in mind, a collaboration opportunity, or just want to
            say hi — my inbox is always open.
          </p>

          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-blue-400" />
            <a href="mailto:your@email.com" className="hover:underline text-gray-200">
              your@email.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-purple-400" />
            <a href="tel:+254700000000" className="hover:underline text-gray-200">
              +254 700 000 000
            </a>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6 text-pink-400" />
            <span className="text-gray-200">Nairobi, Kenya</span>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 bg-white/10 backdrop-blur-lg border border-white/20 
                     rounded-2xl shadow-lg p-8"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium 
                       bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white
                       shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-60"
          >
            <Send className="w-5 h-5" /> {loading ? "Sending..." : "Send Message"}
          </button>

          {success && <p className="text-center text-sm mt-2">{success}</p>}
        </motion.form>
      </div>
    </motion.section>
  );
}

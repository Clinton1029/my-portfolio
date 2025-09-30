"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const formRef = useRef<HTMLFormElement>(null);

  // 🔹 Real-time validation
  const validateField = (name: string, value: string) => {
    let error = "";
    if (!value.trim()) error = `${name} is required`;
    if (name === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) error = "Invalid email format";
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
    return error === "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let isValid = true;

    // Final validation check
    Object.entries(formData).forEach(([key, value]) => {
      if (!validateField(key, value)) isValid = false;
    });
    if (!isValid) return;

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });

        // 🎉 Confetti animation
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
        });
      } else {
        setStatus({ type: "error", message: "Failed to send. Try again." });
        triggerShake();
      }
    } catch (err) {
      setStatus({ type: "error", message: "Something went wrong." });
      triggerShake();
    } finally {
      setLoading(false);
    }
  };

  // ❌ Shake animation on error
  const triggerShake = () => {
    if (formRef.current) {
      formRef.current.animate(
        [
          { transform: "translateX(0px)" },
          { transform: "translateX(-10px)" },
          { transform: "translateX(10px)" },
          { transform: "translateX(-10px)" },
          { transform: "translateX(10px)" },
          { transform: "translateX(0px)" },
        ],
        {
          duration: 400,
          easing: "ease-in-out",
        }
      );
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
          <p className="text-gray-300 text-lg leading-relaxed">
            Have a project in mind, looking for collaboration, or just want to
            say hi? My inbox is always open — let’s create something amazing.
          </p>

          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-blue-400" />
            <a
              href="mailto:your@email.com"
              className="hover:underline text-gray-200 transition-colors"
            >
              yadeclinton20@email.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-purple-400" />
            <a
              href="tel:+254700000000"
              className="hover:underline text-gray-200 transition-colors"
            >
              +254 790 847 824
            </a>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6 text-pink-400" />
            <span className="text-gray-200">Nairobi, Kenya</span>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 bg-white/10 backdrop-blur-lg border border-white/20 
                     rounded-2xl shadow-xl p-8 relative"
        >
          {["name", "email"].map((field) => (
            <div key={field} className="relative">
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={(formData as any)[field]}
                onChange={handleChange}
                required
                className={`peer w-full px-4 pt-5 pb-2 rounded-lg bg-white/5 border 
                            border-white/20 text-white placeholder-transparent 
                            focus:outline-none focus:ring-2 
                            ${
                              field === "email"
                                ? "focus:ring-purple-500"
                                : "focus:ring-blue-500"
                            } transition-all duration-300`}
                placeholder={field}
              />
              <label
                className="absolute left-4 top-2.5 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-blue-400"
              >
                {field === "name" ? "Your Name" : "Your Email"}
              </label>
              {errors[field] && (
                <span className="text-red-400 text-xs">{errors[field]}</span>
              )}
            </div>
          ))}

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              className="peer w-full px-4 pt-5 pb-2 rounded-lg bg-white/5 border 
                         border-white/20 text-white placeholder-transparent 
                         focus:outline-none focus:ring-2 focus:ring-pink-500
                         transition-all duration-300"
            ></textarea>
            <label
              className="absolute left-4 top-2.5 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-pink-400"
            >
              Your Message
            </label>
            {errors.message && (
              <span className="text-red-400 text-xs">{errors.message}</span>
            )}
          </div>

          {/* Button */}
          <motion.button
            type="submit"
            disabled={loading}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold 
                       bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white
                       shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 
                       transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed
                       relative overflow-hidden"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" /> Send Message
              </>
            )}
          </motion.button>

          {/* Status */}
          <AnimatePresence>
            {status && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`flex items-center gap-2 text-sm mt-2 ${
                  status.type === "success" ? "text-green-400" : "text-red-400"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <XCircle className="w-4 h-4" />
                )}
                {status.message}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </motion.section>
  );
}

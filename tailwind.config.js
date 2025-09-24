/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // important!
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#2563eb", // primary blue
          dark: "#1e3a8a",   // darker blue for dark mode
        },
      },
    },
  },
  plugins: [],
};

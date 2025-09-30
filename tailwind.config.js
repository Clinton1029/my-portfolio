/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enables class-based dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",   // app router
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // in case you use pages router too
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // shared components
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

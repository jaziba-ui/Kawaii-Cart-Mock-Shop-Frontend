/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        vibe1: "#F5EEE6",
        vibe2: "#FFF8E3",
        vibe3: "#F3D7CA",
        vibe4: "#E6A4B4",
      },
      fontFamily: {
        heading: ["'Baloo 2'", "cursive"],
        body: ["'Manrope'", "'Poppins'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["DM Serif Display", "Georgia", "serif"],
        script: ["Allura", "cursive"],
      },
      colors: {
        cream: "#f7f0e7",
        chocolate: "#3b1f17",
        cocoa: "#5b3023",
        caramel: "#b87943",
        gold: "#c69b62",
        espresso: "#24130e",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(59,31,23,.12)",
      },
    },
  },
  plugins: [],
}
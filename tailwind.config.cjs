/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // adjust to match the wallet designs
        primary: "#4F46E5",
        primarySoft: "#EEF2FF",
        accent: "#F97316",
        dark: "#0F172A",
      },
    },
  },
  plugins: [],
}

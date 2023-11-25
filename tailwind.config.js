/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        _bg_primarary: "#2D2D2D",
        _footer_text: "#B3B3B3"
      }
    },
  },
  plugins: [],
}
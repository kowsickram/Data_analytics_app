/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Croissant: ["Croissant One", "serif"],
        Kite:["Kite One","sans-serif"],
        Quicksand:["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily:{
        Bruno:["Bruno Ace SC", "sans-serif"],
        Archivo: ["Archivo Narrow", "sans-serif"],
        Poiret: ["Poiret One", "sans-serif"],
      }
    },
  },
  plugins: [],
}

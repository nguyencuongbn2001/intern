/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fontcuong': ['Roboto Slab', 'serif']
      },
      keyframes: {
        fadeIn: { from: { opacity: 0 }, to: { opacity: 1 } }
      },
      animation: {   
        fadeIn: 'fadeIn .5s ease-in-out',
      },
  },
  plugins: [],
}}
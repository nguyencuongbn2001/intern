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
        , 
        fadeCard:{from: {top: 0 },to :{top: 80 }}
      },
      animation: {   
        fadeIn: 'fadeIn .5s ease-in-out',
        fadeCard:'fadeCard .5s ease-in-out'
      },
  },
  plugins: [],
}}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'one' : '#FFF5E0',
        'two' : '#FF6969',
        'three' : '#BB2525',
        'four' : '#141E46',
      }
    },
  },
  plugins: [],
}
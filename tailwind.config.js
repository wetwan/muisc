/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'nav': 'linear-gradient(40deg, #5757ef73 ,#2a2abd91,#5757ef73,#4949ed48)',
      },
      fontFamily:{
        'serif':' "Cambria", "Cochin", Georgia, Times, "Times New Roman", serif',
        'sans': " 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        'lex': ['LexendDeca', 'sans-serif'],
        'bsg': ['BigShouldersDisplay', 'sans-serif'],
      },
      colors: {
        'brightorange': '#e38826',
        'blue': '#3e52a3',
        'darkcyan': '#006970',
        'verydarkcyan': '#004241',
        'transparentwhite': '#ffffff',
        'verylightgray': '#f2f2f2',
      }
    },
  },
  plugins: [],
}
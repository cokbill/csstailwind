/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
'./form.html'],
  theme: {
    extend: {
      backgroundImage : {
        'wave' : "url('/src/img/wave1.svg')",
      }
    },
  },
  plugins: [],
}

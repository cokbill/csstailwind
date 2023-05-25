/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
'./form.html',
'./invoice.html',
'./grid.html',
'./latihanaja.html',
'./article.html',
'./gridphone.html',
'card.html',
'./absolutecard.html',
],
  theme: {
    extend: {
      backgroundImage : {
        'wave' : "url('/src/img/wave1.svg')",
      }
    },
  },
  plugins: [],
}


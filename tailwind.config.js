/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      colors :{
        'theme' : 'rgba(124, 58, 237, 1)',
        'theme-alt' : 'rgba(124, 58, 237, 0.8)',
        'theme-hovd' : 'rgb(73, 33, 140)',
        'theme-hovl' : 'rgb(146, 96, 231)',
      },
      fontSize : {
        '12xl' : '9.6rem',
        '15xl' : '12rem',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        green: { ...colors.green, 500: '#66A060' },
        yellow: { ...colors.yellow, 500: '#CEB02C' },
        gray: {
          ...colors.gray,
          400: '#D3D6DA',
          500: '#939B9F',
          600: '#DADCE0',
          700: '#56575E',
          800: '#818181'
        },
        dark: {
          ...colors.dark,
          400: '#888FB5',
          500: 'rgba(38, 43, 60, 0.89)',
          600: 'rgba(218, 220, 224, 0.03)',
          700: 'rgba(38, 43, 60, 1)',
          800: 'rgba(147, 155, 159, 0.2)',
          900: 'rgba(86, 95, 126, 1)'
        },
      },
    },
  },
  plugins: [],
}


const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily:{
      montserrat: ['Montserrat, sans-serif'],
      rammetto: ['Rammetto One, cursive']
    },
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

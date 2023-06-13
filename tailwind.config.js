/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend : {
      colors: {
        'dullesGreen' : '#035c54',
        'fairfaxYellow': '#ecc94b',
        // ...
      },
      animation: {
        'fade-in-bounce': 'fade-in 10s ease-in, bounce 7s infinite',
        'twinkling': 'fade-in 60s ease-in, fade-in 60s infinite',
      },

      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        twinkling: {
          '0%': { opacity: 0 },
          '50%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      }
    }
  },
  plugins: [
  ],
}

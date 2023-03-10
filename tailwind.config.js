/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#FEFEFE',
        'primary': '#CCCCCC',
        'secondary': '#5D7763'
      },
      fontFamily: {
        sans: ['var(--font-IBM)']
      }
    },

  },
  plugins: [],
};
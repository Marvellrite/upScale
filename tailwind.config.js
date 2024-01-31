/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '750px',
      lg: '900px',
      xl: '1200px'
    },
    extend: {
      colors: {
        upscaleBlue: '#92c3fa',
        upscalePink: '#cda5ff',
        upscaleGrey: '#f8f8ff'
      }
    },
  },
  plugins: [],
}


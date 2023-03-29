/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.tsx",
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        black: "#1D1D1B",
        blue: {
          600: "#194351",
          500: "#029ECF",
          400: "#41B3D7",
        },
        purple: "#6C469D",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
}


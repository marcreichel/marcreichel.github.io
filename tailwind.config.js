const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: colors.fuchsia,
      },
    },
  },
  plugins: [],
}

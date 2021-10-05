module.exports = {
  purge: ["./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        zilla: ["'Zilla Slab'", "serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      fontStyle: ["hover"],
    },
  },
  plugins: [],
};

module.exports = {
  purge: ["./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        zilla: ["'Zilla Slab'", "serif"],
        lato: ["Lato", "sans-serif"],
      },
      minHeight: {
        40: "10rem",
      },
    },
  },
  variants: {
    extend: {
      scale: ["active"],
    },
  },
  plugins: [],
};

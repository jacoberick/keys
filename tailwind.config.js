module.exports = {
  purge: ["./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      redGlow: "0px 2.5px 15px rgba(239, 68, 68, .5)",
      greenGlow: "0px 2.5px 15px rgb(52, 211, 113, .5)",
    },
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

module.exports = {
  purge: ["./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      redGlow: "0px 2.5px 15px rgba(239, 68, 68, .5)",
      greenGlow: "0px 2.5px 15px rgb(52, 211, 113, .5)",
      introFlow: "-5px 5px 10px 5px rgb(0, 0, 0, .2)",
    },
    screens: {
      bOne: { max: "773px" },
      bTwo: { max: "603px" },
      bThree: { max: "567px" },
    },
    extend: {
      fontFamily: {
        zilla: ["'Zilla Slab'", "serif"],
        lato: ["Lato", "sans-serif"],
      },
      minHeight: {
        40: "10rem",
      },
      height: {
        screenMinusHeader: "calc(100vh - 60px)",
      },
      keyframes: {
        highlight: {
          "0%, 100%": { color: "#fefefe" },
          "10%, 90%": { color: "#FBBF24" },
        },
      },
      animation: {
        highlight: "highlight 3s infinite",
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

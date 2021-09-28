module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        cyan: "#9cdbff",
        primary: "#f3c614",
        secondary: "#353535",
      },
      height: {
        80: "20rem",
        100: "25rem",
      },
    },
  },
  variants: {
    opacity: ["disabled"],
    extend: {},
  },
  plugins: [],
};

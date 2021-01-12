module.exports = {
  plugins: [
    require("postcss-apply"),
    require("postcss-custom-media")({
      preserve: false,
    }),
    require("postcss-preset-env")({
      autoprefixer: {
        grid: true,
      },
    }),
  ],
};

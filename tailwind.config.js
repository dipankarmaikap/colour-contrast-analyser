const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  purge: ["./src/**/*.js"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};

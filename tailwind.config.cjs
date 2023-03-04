/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        quicksand: ['"Quicksand"', "sans-serif"],
        sans: ['"Quicksand"', "sans-serif"],
        roboto: ['"Roboto Mono"', "sans-serif"],
      },
      backgroundImage: {
        "grain-light": "url('/src/assets/background/bg-grain.png')",
        "grain-dark": "url('/src/assets/background/bg-grain-dark.png')",
      },
      backgroundSize: {
        "grain-size": "350px auto",
      },
    },
    colors: {
      // Light mode
      colorHeaderBgLight: "#24292f",
      colorHeaderTextLight: "#ffffff",
      colorMainBgLight: "#ebecf0", //
      colorBorderDefaultLight: "#8495b9", //
      colorTextPrimaryLight: "#14303f", //
      colorTextSecondaryLight: "#57606a",
      colorBoxContentBgLight: "#ebecf0", //
      // Dark mode
      colorHeaderBgDark: "#2d333b",
      colorHeaderTextDark: "#cdd9e5",
      colorMainBgDark: "#14303f", //
      colorBorderDefaultDark: "#5d73a3", //
      colorTextPrimaryDark: "#ffb39b", //
      colorTextSecondaryDark: "#768390",
      colorBoxContentBgDark: "#14303f", //
    },
    boxShadow: {
      // Light mode
      shadowSmallLight: "0 1px 0 rgba(27, 31, 36, 0.04)",
      shadowMediumLight: "0 3px 6px rgba(140, 149, 159, 0.15)",
      shadowLargeLight: "0 8px 24px rgba(140, 149, 159, 0.2)",
      shadowExtraLargeLight: "0 12px 28px rgba(140, 149, 159, 0.3)",
      // Dark mode
      shadowSmallDark: "0 0 transparent",
      shadowMediumDark: "0 3px 6px #1c2128",
      shadowLargeDark: "0 8px 24px #1c2128",
      shadowExtraLargeDark: "0 12px 48px #1c2128",
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("prettier-plugin-tailwindcss"),
  ],
});

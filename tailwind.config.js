/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      skybright: "#bae6fd",
      skydark: "#082f49",
      primary: "#3399EE",
      dark: "#000",
      lightening: "#fcd34d",
      lightening_light: "rgb(254 243 199)",
    },
    extend: {
      listStyleImage: {
        store: 'url("/bullet1.svg")'
      }
    },
  },
  plugins: [],
});


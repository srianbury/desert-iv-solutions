/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        grey: "#d3d3d3",
        primary: "#6EC1E4",
        accent: "#61CE70",
        fbBlue: "#0165E1",
        igPurpleRed: "#C13584",
      },
      dropShadow: {
        black: "0 0px 10px black",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  //put in purge command here 
  darkmode: false, 
  mode: "jit", //jit stands for just in time compilation, which compiles the css on the fly 
  theme: {
    extend: {
      colors: {
        genevaPurple: "#515ADB", 
        genevaGrey: "#D8D8D8", 
        serviceBoxBackground: "#F9F9F9"
      },
      fontFamily: {
        avenir: ["Avenir Next", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
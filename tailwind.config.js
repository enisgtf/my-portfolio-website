/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./components/**/*.{vue,js,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./composables/**/*.{js,ts}",
      "./plugins/**/*.{js,ts}",
      "./App.{js,ts,vue}",
    ],
  },
  theme: {
    screens: {
      /* desktop first  */
      sm: { max: "500px" },
      md: { min: "501px", max: "1000px" },
    },
    fontSize: {
      xxs: "12px",
      xs: "13px",
      s: "14px",
      m: "16px",
      l: "18px",
      xl: "20px",
      xxl: "22px",
      xxxl:"28px",
      heading: "32px",
    },
    colors: {
      "dark-navy": "#020c1b",
      navy: "#0a192f",
      "light-navy": "#112240",
      "lightest-navy": "#233554",
      "navy-shadow": "rgba(2,12,27,0.7)",
      "navy-shadow": "rgba(2,12,27,0.7)",
      "dark-slate": "#495670",
      slate: "#8892b0",
      "light-slate": "#a8b2d1",
      "lightest-slate": "#ccd6f6",
      white: "#e6f1ff",
      green: "#64ffda",
      "green-tint": "rgba(100,255,218,0.1)",
      pink: "#f57dff",
      blue: "#57cbff",

    },
    extend: {
      fontFamily: {
        sf: ["SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "monospace"],
        cal: ["Calibre", "-apple-system", "sans-serif"],
      },
      keyframes: {
        'open-menu' : {
          '0%' : {opacity: '0', transform: 'translateY(-4%)'},
          '100%' : {opacity: '1', transform: 'translateY(0)'}
        },
        
      },
      animation:{
        'open-menu': 'open-menu .5s ease-in-out forwards'
      }
    },
  },
};

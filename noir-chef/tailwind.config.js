/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    extend: {
      colors: {
        headerBg: "#272727",
        foundation: "#000000",
        headerText: "#FFC164",
        textColor: "#FFF",
        buttonColor: "#FF5C5C",
        menuBtnColor: "#ff9f0f",
      },

      fontFamily: {
        bigText: "DM Sans, sans-serif",
        header: "DM Serif Display, serif",
        smText: "Inter, sans-serif",
        priceText: "Cinzel, serif",
      },

      backgroundImage: {
        'footerBg': "url('../assets/Rectangle\ 24.png')",
      }
    },
  },
  plugins: [],
}


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
        headerText: "#FFC164",
        textColor: "#FFF",
        buttonColor: "#FF5C5C",
      },

      fontFamily: {
        bigText: "DM Sans, sans-serif",
        header: "DM Serif Display, serif",
        smText: "Inter, sans-serif",
      }
    },
  },
  plugins: [],
}


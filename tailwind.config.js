/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      lineHeight: {
        "content-lh": "19.5px",
        "heading-lh": "24.38px",
      },
      colors: {
        "link-cl": "#9FB2FF",
        "content-cl": "#787878",
        "heading-black": "#2C2B2B",
        "placeholder-cl": "#7F7F7F",
        "blue-st": "rgba(149, 190, 255, 1)",
        "blue-end": "rgba(123, 145, 255, 1)",
        "search-blue-st": "rgba(222, 229, 255, 1)",
        "search-blue-end": "rgba(128, 154, 255, 1)",
        "alert-grad-st": "rgba(129, 157, 255, 0.28)",
        "alert-grad-end": "rgba(16, 16, 16,0.2)",
        "task-grad-st": "#D3A4F4",
        "task-grad-end": "#E9B1E0",
      },
      backgroundColor: {
        "input-bg-cl": "#F1F1F1",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

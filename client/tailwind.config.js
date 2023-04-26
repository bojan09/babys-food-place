/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F8F7F2",
        secondary: "#f2f2d9",
        color_green: "#96BB36",
        color_orange: "#F0972A",
        color_lightgray: "#D8D8D8",
        color_midgray: "#A5A5A5",
        color_darkgray: "#626262",
        border_lightgray: "#F0EFEA",
        border_lightgray: "#F0EFEA",
        border_gray: "#00000012",
        button_border: "#00000029",
      },
      screens: {
        xs: "350px",
      },
    },
  },
  plugins: [],
};

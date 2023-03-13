/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // plugins: ,
  theme: {
    extend: {
      screens: {
        xs: "315px",
        sm: "648px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
      fontFamily: {
        archivo: "Archivo",
      },
    },
  },
  plugins: [require("daisyui")],
};

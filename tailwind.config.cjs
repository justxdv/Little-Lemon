/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#495e57",
        secondary: "#F4CE14",
      },
      screens: {
        sm: "480px",
      },
      maxWidth: {
        xs: "280px",
      },
    },
  },
  plugins: [],
};

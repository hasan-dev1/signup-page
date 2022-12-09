/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#56C870",
          secondary: "#26405B",
          accent: "#132128",
          neutral: "#B0D6CE",
          "base-100": "#ffffff",
        },
        light: {
          // primary: "#56C870",
          // secondary: "#26405B",
          // accent: "#132128",
          // neutral: "#B0D6CE",
          // "base-100": "#132128",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};


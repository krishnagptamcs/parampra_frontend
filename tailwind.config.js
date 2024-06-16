/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },

      colors: {
        "regal-red": "#9E2A0D",
        "main-yellow": "#E6B90D",
        "pale-cream": "#E3C44B",
        "smoke-gray": "#616161",
      },
    },
  },
  plugins: [],
};

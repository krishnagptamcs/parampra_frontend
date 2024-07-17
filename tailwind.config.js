/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        "regal-red": "#9E2A0D",
        "main-yellow": "#E6B90D",
        "pale-cream": "#E3C44B",
        "smoke-gray": "#616161",
        "primary-brown": "#F8D7B6",
        "light-brown": "#FDF2E7",
        "border-brown": "#F1AE6D",
        "footer-brown": "#774D25",
        "btn-brown": "#F57A26",
      },
    },
  },
  plugins: [],
};

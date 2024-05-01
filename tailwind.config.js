/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        maloneBeige: "#C79388",
        beigeHover: "#A1766F",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/img/dogBanner.jpg')",
      },
      fontFamily: {
        poppins: ['"poppins"', "sans-serif"],
      },
      mapsApiKey: {
        apiKey: "AIzaSyDiFTRIuPozKsL6b7hrWvqNSnJjbl0FIV8",
        mapId: "d06f3bce6676ea2a",
      },
    },
  },
  plugins: [],
};

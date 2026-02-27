/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      colors: {
        // Deep forest-night blue inspired by the video
        "pe-bg": "#020617"
      },
      boxShadow: {
        "soft-glow": "0 18px 45px rgba(0,0,0,0.8)"
      }
    }
  },
  plugins: []
};


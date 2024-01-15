/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'blue': '#55C0CF',
        'brown': '#2C1E1E',
        'black': '#1F1615',
        'orange': '#B65F28',
        'yellow': '#FFD543',
      },
      fontFamily: {
        'fjalla': ['Fjalla One'],
      },
    },
  },
  plugins: [],
}


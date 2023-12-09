/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": "#E25C07",
        "second": "#2B2A4C",
        "third": "#c34544"
      },
      fontFamily: {
        "main": ["Inter", "sans-serif"]
      },
      screens: {
        "2md": "676px",
        "2lg": "860px"
      }
    },
  },
  plugins: [],
}


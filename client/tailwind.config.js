/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mainbg': '#303030',
        'secondbg': '#ee4b2b',
        'mainarea': '#1a1a1a',
        'maintext': "#f3f3f3ea"
      },
      fontFamily: {
        tuf: ["Amaranth", "sans-serif"],
      },

    },
  },
  plugins: [],
}


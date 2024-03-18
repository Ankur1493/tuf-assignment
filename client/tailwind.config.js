/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'amaranth': ['Amaranth', 'sans-serif'],
      },
      colors: {
        'mainbg': '#303030',
        'secondbg': '#ee4b2b',
        'maintext': "#f3f3f3ea"
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'orange': '#FC8500',
      },
      fontFamily: {
        'violetSans': ['VioletSans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

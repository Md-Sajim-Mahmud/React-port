/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'inter': ['"Inter", sans-serif;'],
    },
    container: {
      center: true,
      padding:'20px',
    },
    extend: {},
  },
  plugins: [],
}
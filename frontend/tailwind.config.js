/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      },
      colors: {
        'green-dark': '#0A210F',
        'green-light': '#13591D',
        'auth-green': '#C8DFDA',
        'green-white': '#DDEFEB',
        'back-1': '#7EC3B2',
      },
    },
  },
  plugins: [],
}
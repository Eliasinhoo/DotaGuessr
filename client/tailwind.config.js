/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Tahoma', 'sans-serif'],
      },
      colors: {
        back: '#172228',
        prim: '#6f7983',
        head: '#203139',
        dotagreen: '#43814c',

      },
    },
  },
  plugins: [],
}


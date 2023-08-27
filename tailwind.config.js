/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'transparent' : 'transparent',
      'white' : '#fff',
      'black' : '#000',
      'primary' : '#4d96f5',
      'secondary' : '#4ac7c8',
      'danger': '#f37060',
      'success' : '#16a34a',
      'gray' : {
        100: '#f2f2f2',
        200: '#e2e2e2',
        300: '#bbbbbb',
        400: '#afafaf'
      }
    }
  },
  plugins: [],
}
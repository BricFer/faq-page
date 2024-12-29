/** @type {import('tailwindcss').Config} */
module.exports = {
  content:
    [
      "./src/**/*.{js,ts}",
      "./src/**/*.css",
      "./src/index.html"
            
    ],
  theme: {
    screens: {
      sm:'375px',
      xl: '1440px',
    },
    colors: {
      'white': '#ffffff',
      'light-pink': '#f9f0ff',
      'grayish-purple': '#8c6991',
      'dark-purple': '#2f1533',
      'attribution': '#3e52a3',
    },
    fontFamily: {
      serif: ['Work Sans', 'serif'],
    },
    extend: {
      backgroundImage : {
        'pattern': 'url("../../assets/images/background-pattern-mobile.svg")'
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['"./src/**/*.{js,ts,jsx,tsx}"'],
  theme: {
    extend: {
      colors: {
        primary: '#032548',
        primaryLight: '#35516D',
        secondary: '#04A6A2',
        gray500: '#8B96A2',
        gray800: '#4C5359',
      },
      fontWeight: {
        medium: '500',
      },
      scrollPadding: {
        top: '10px',
      },
    },
  },
  plugins: [],
};

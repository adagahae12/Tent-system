/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '124': '31rem',
        '176':'44rem',
        '256': '64rem',
      },

      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#373737',
        second: '#181818',
        red:'#ff0000',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      },
      colors: {
        'orange': '#FD9341',
        'blue': '#1450A3'
      },
      fontFamily: {
        paris: ['Paris', 'sans-serif']
      }
    },
  },
  plugins: [],
};

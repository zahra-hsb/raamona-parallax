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
        'slide1': 'url(/images/blog/Blog-Item.png)',
        'slide2': 'url(/images/blog/State=Page-2.png)',
        'slide3': 'url(/images/blog/State=Page-3.png)',
        'about': 'url(/images/about/Frame126.png)',
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

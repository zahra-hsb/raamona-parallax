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
        'footer': 'url(/images/footer/FooterImage.png)',
        'contact': 'url(/images/contact/bg.png)',
        'blogContent': 'url(/images/blogContent/image.png)',
      },
      colors: {
        'orange': '#FD9341',
        'blue': '#1450A3'
      },
      fontFamily: {
        paris: ['Paris', 'sans-serif']
      },
      keyframes: {
        'infinite-scroll': {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-100%)' },
        },
        'infinite-reverse-scroll': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translate(50%)' },
        }
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 10s linear infinite',
        'infinite-reverse-scroll': 'infinite-reverse-scroll 10s linear infinite'
      },
      boxShadow: {
        'input': '0 4px 4px 0 #00000033'
      }
    },
  },
  plugins: [],
};

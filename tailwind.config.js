/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{vue,js}',
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './plugins/**/*.{vue,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Montserrat", sans-serif'],

      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
        'section_banner': "url('/img/banner.png')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

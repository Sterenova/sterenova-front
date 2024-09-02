/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors : {
        primary : '#6225B5',
        secondary : '#8021B5',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(120deg, rgb(98,37,181) 0%, rgb(128,33,181) 40%)',
      },
      borderRadius: {
        'custom': '80px',
      },
      rotate: {
        '-10': '-10deg',
      },
    },
  },
  plugins: [],
}


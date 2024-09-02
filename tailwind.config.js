/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C63FF',  // Example color from your design
        secondary: '#FF6584', // Another example
      },
    },
  },
  plugins: [],
}


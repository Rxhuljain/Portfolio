/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '4xl': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
      },
    },
  },
  plugins: [],
};
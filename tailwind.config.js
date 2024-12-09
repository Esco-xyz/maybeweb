/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#faf6f3',
          100: '#f0e6e0',
          200: '#e2cfc3',
          300: '#d1b3a1',
          400: '#ba8f77',
          500: '#a97658',
          600: '#956149',
          700: '#7c4e3d',
          800: '#674236',
          900: '#573a31',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        western: ['Cinzel', 'serif'],
      },
    },
  },
  plugins: [],
};
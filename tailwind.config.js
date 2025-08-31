/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'grid': 'grid 15s linear infinite',
        'spin': 'spin 2s linear infinite',
      },
      keyframes: {
        grid: {
          '0%, 100%': { transform: 'translateY(-50%)' },
          '50%': { transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        'geist': ['Geist', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}


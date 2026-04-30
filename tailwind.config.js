/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        aritium: {
          primary: '#2f2bff',
          dark: '#05070d',
          section: '#0c1120',
          card: '#111827',
          gray: '#9ca3af',
          text: '#e5e7eb'
        }
      }
    }
  },
  plugins: []
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        aritium: {
          primary: '#007bff',
          dark: '#1e293b',
          section: '#2c3e50',
          card: '#34495e',
          gray: '#6c757d',
          text: '#e5e7eb'
        }
      }
    }
  },
  plugins: []
};

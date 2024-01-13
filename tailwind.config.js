/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue, js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        accent: '#C1DCDC',
        'custom-black': '#1E1E1E',
        'custom-black-100': 'rgba(30, 30, 30, 0.75)',
        'custom-black-200': 'rgba(30, 30, 30, 0.50)'
      },
      fontSize: {
        '6.5xl': '4rem',
        '3.5xl': '2rem'
      }
    }
  },
  plugins: []
}

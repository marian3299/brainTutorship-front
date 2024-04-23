/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-1': '#070F2B',
        'blue-2': '#1B1A55',
        'grey': '#535C91',
        'purple': '#9290C3',
        'white': '#FFFFFF',
        'black': '#000000',
      },

      fontFamily:{
        'inter': ["Inter", "sans-serif"]
      },
    },
  },
  plugins: [],
}

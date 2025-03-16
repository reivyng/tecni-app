// filepath: /home/brayan/Escritorio/tecni-app/tecni-app/tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sintony: ['Sintony', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        'instrument-serif': ['Instrument Serif', 'serif'],
      },
    },
  },
  plugins: [],
}
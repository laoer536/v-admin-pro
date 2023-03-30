/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/pages/**/*.{vue,tsx}','./src/components/**/*.{vue,tsx}','./src/App.vue'],
  plugins: [require('daisyui')],
}

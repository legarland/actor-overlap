/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [tailwindcss('./src/tailwind.js'), require('autoprefixer')]
}

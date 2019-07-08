/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.jsx', './src/**/*.js', './public/index.html'],
  css: ['./src/style/tailwind.css'],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
  plugins: [
    tailwindcss('./src/tailwind.js'),
    autoprefixer,
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
  ]
}

const map = require('lodash/map')

module.exports = {
  theme: {
    fontFamily: {
      body: ['Roboto', 'sans-serif'],
      condensed: ['Roboto Condensed', 'sans-serif']
    },
    extend: {
      rotate: {
        '1/2': '180deg'
      },
      width: {
        '72': '18rem',
        '80': '20rem'
      },
      height: {
        '72': '18rem',
        '80': '20rem',
        '88': '22rem',
        '96': '24rem'
      },
      margin: {
        '72': '18rem',
        '80': '20rem'
      },
      padding: {
        '72': '18rem',
        '80': '20rem'
      },
      inset: {
        arrow: '50%'
      },
      maxWidth: {
        '1/2': '50%',
        '3/4': '65%'
      },
      screens: {
        md: '900px',
        lg: '1200px'
      },
      maxHeight: {
        '1/2': '50%'
      },
      borderRadius: {
        xl: '.75rem'
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'black-opacity-25': 'rgba(0,0,0,.25)',
        'black-opacity-50': 'rgba(0,0,0,.5)',
        sidebar: '#001743'
      })
    }
  },
  variants: {},
  plugins: [
    function({ addUtilities, config, e }) {
      const rotateUtilities = map(config('theme.rotate'), (value, key) => ({
        [`.${e(`rotate-${key}`)}`]: {
          transform: `rotate(${value})`
        }
      }))

      addUtilities(rotateUtilities)
    }
  ]
}

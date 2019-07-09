const map = require('lodash/map')

module.exports = {
  theme: {
    extend: {
      rotate: {
        '1/2': '180deg'
      },
      width: {
        '72': '18rem',
        '80': '20rem'
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
        arrow: '43%'
      },
      maxWidth: {
        '1/2': '50%',
        '3/4': '65%'
      },
      screens: {
        md: '800px',
        lg: '1100px'
      },
      maxHeight: {
        '1/2': '50%'
      },
      borderRadius: {
        xl: '.75rem'
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'black-opacity-25': 'rgba(0,0,0,.25)'
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

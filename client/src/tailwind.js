const map = require('lodash/map')

module.exports = {
  theme: {
    extend: {
      rotate: {
        '1/2': '180deg'
      },
      inset: {
        arrow: '60%'
      },
      maxWidth: {
        '1/2': '50%'
      },
      maxHeight: {
        '1/2': '50%'
      }
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

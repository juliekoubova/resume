const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  corePlugins: {
    fontSize: false,
    lineHeight: false
  },
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Quicksand',
          ...defaultTheme.fontFamily.sans
        ]
      },
      screens: {
        sm: {
          raw: `screen and (min-width: ${defaultTheme.screens.sm})`
        },
        md: {
          raw: `screen and (min-width: ${defaultTheme.screens.md})`
        },
        lg: {
          raw: `screen and (min-width: ${defaultTheme.screens.lg})`
        },
        xl: {
          raw: `screen and (min-width: ${defaultTheme.screens.xl})`
        },
        print: { raw: 'print' },
        screen: { raw: 'screen' }
      }
    }
  },
  variants: {},
  verticalRhythm: {
    defaultLineHeight: 'loose',
    fontCapHeight: {
      default: 0.705,
      'Open Sans': 0.72
    },
    height: 0.5
  },
  plugins: [
    require('./tailwind/vertical-rhythm'),
    require('tailwindcss-padding-safe')()
  ]
}

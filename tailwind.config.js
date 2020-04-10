const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  corePlugins: {
    fontSize: false,
    lineHeight: false
  },
  theme: {
    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#fff',

      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c'
      },
      pink: {
        100: '#fff5f7',
        200: '#fed7e2',
        300: '#fbb6ce',
        400: '#f687b3',
        500: '#ed64a6',
        600: '#d53f8c',
        700: '#b83280',
        800: '#97266d',
        900: '#702459'
      }
    },
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
        screen: { raw: 'screen' },
        dark: { raw: 'screen and (prefers-color-scheme: dark)' }
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
    require('tailwind-vertical-rhythm'),
    require('tailwindcss-padding-safe')()
  ]
}

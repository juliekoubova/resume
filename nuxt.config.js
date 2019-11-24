// @ts-check

const { resolve } = require('path')

/** @type {import('@nuxt/types').Configuration} */
export default {
  mode: 'universal',

  head: {
    htmlAttrs: {
      lang: 'en-US'
    },
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#fff' },
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],
  modules: [
    'nuxt-fontawesome',
    'nuxt-webfontloader'
  ],
  build: {
    /** @param {import('webpack').Configuration} config */
    extend(config) {
      if (!config.module) {
        config.module = { rules: [] }
      }

      config.module.rules.push({
        test: /\.md$/,
        include: resolve(__dirname, 'content'),
        loader: 'frontmatter-markdown-loader',
        options: {
          markdownIt: {
            typographer: true
          }
        }
      })
    }
  },
  fontawesome: {
    component: 'fa',
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: [
          'faCircle',
          'faChevronDown',
          'faMapMarkerAlt',
          'faMobileAlt',
          'faPaperPlane'
        ]
      }, {
        set: '@fortawesome/free-brands-svg-icons',
        icons: [
          'faGithub'
        ]
      }
    ]
  },
  postcss: {
    'postcss-cssnext': {
      browsers: ['last 2 versions', 'ie >= 11']
    }
  },
  purgeCSS: {
    paths: [
      'node_modules/@fortawesome/fontawesome-svg-core/**/*.js'
    ]
  },
  router: {
    base: '/resume'
  },
  server: {
    host: '0.0.0.0'
  },
  webfontloader: {
    google: {
      families: [
        'Quicksand:400,500,700&display=swap&subset=latin'
      ]
    }
  }
}

// @ts-check

const { resolve } = require('path')

/** @type {import('@nuxt/types').Configuration} */
export default {
  mode: 'universal',

  head: {
    htmlAttrs: {
      lang: 'en-US'
    },
    title: 'Julie Koubová',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },

      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'msapplication-config', content: '/resume/browserconfig.xml' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'preconnect', href: 'https://www.google-analytics.com' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/resume/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/resume/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/resume/favicon-16x16.png' },
      { rel: 'manifest', href: '/resume/site.webmanifest' },
      { rel: 'mask-icon', href: '/resume/safari-pinned-tab.svg', color: '#97266d' },
      { rel: 'shortcut icon', href: '/resume/favicon.ico' }
    ]
  },

  loading: { color: '#fff' },
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
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],
  fontawesome: {
    component: 'fa',
    imports: [
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: [
          'faFilePdf'
        ]
      }, {
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

  'google-gtag': {
    id: 'UA-58690305-2'
  },

  modules: [
    '@nuxtjs/google-gtag',
    'nuxt-fontawesome'
  ],
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
  }
}

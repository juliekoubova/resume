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
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: [
          'faCircle',
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
  webfontloader: {
    google: {
      families: ['Quicksand:400,500,700&display=swap&subset=latin']
    }
  }
}

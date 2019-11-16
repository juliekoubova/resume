// @ts-check

const { resolve } = require('path')

/** @type {import('@nuxt/types').Configuration} */
export default {
  mode: 'universal',

  head: {
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
    '@nuxtjs/tailwindcss',
    'nuxt-typed-vuex'
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
          mode: 'vue-render-functions'
        }
      })
    },
    transpile: [/nuxt-typed-vuex/]
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  },
  webfontloader: {
    google: {
      families: ['Quicksand:400,500,700&display=swap&subset=latin']
    }
  }
}

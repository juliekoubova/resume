export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
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
  // extensions: ['ts'],
  /*
  ** Customize the progress-bar color
  */
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
    // additionalExtensions: ['ts'],
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

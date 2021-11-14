import { resolve } from 'path'
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',


  build: {
    // https://go.nuxtjs.dev/config-build
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    }
  },

  // Global App headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Steve Mbiele',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Welcome to my website',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '~/components', extensions: ['vue'] }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],
  alias: {
    'models': resolve(__dirname, './models'),
  },
  css: ['@/assets/scss/main.scss']
};

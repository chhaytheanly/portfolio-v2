export default defineNuxtConfig({

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/fonts',
    '@vueuse/motion/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
  ],

  ssr: true,

  devtools: { enabled: true },

  app: {
    baseURL: '/portfolio-v2/',
    buildAssetsDir: '/_nuxt/',

    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: { lang: 'en' },

      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/logo/favicon.svg' },
      ],

      meta: [
        { name: 'description', content: 'Chhaythean Portfolio - AI Enthusiast' },
        { name: 'keywords', content: 'chhaythean portfolio, Chhaythean, Portfolio, AI, Artificial Intelligence, Machine Learning, Deep Learning' },
        { name: 'author', content: 'Chhaythean' },

        {
          name: 'google-site-verification',
          content: '00ff2868fffc3b8c'
        }
      ]
    },

    pageTransition: { name: 'page', mode: 'out-in' },
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://chhaytheanly.github.io/portfolio-v2',
    name: 'Chhaythean Portfolio',
    description: 'AI Enthusiast',
    defaultLocale: 'en',
  },

  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      failOnError: false,
      routes: [
        '/',
        '/about',
        '/education',
        '/experience',
        '/projects',
        '/contact',
        '/blog',

        '/en/about',
        '/fr/about',
        '/km/about',

        '/en/education',
        '/fr/education',
        '/km/education',

        '/en/experience',
        '/fr/experience',
        '/km/experience',

        '/en/projects',
        '/fr/projects',
        '/km/projects',

        '/en/contact',
        '/fr/contact',
        '/km/contact',

        '/en/blog',
        '/fr/blog',
        '/km/blog',
      ],
    }
  },

  content: {
    database: {
      type: 'sqlite',
      filename: '.data/content/contents.sqlite',
    },
  },

  compatibilityDate: '2024-11-01',

  typescript: {
    strict: true,
    typeCheck: false,
  },

  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: 'single',
      },
    },
  },

  fonts: {
    defaults: {
      weights: [400, 500, 600, 700],
    },
    families: [
      { name: 'Inter', provider: 'google' },
      { name: 'Space Grotesk', provider: 'google' },
      {
        name: 'Kantumruy Pro',
        provider: 'google',
        subsets: ['khmer', 'latin'],
      },
    ],
  },

  i18n: {
    locales: [
      { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' },
      { code: 'fr', name: 'Français', iso: 'fr-FR', file: 'fr.json' },
      { code: 'km', name: 'ភាសាខ្មែរ', iso: 'km-KH', file: 'km.json' },
    ],

    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',

    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },

    vueI18n: './i18n.config.ts',
  },

  motion: {
    directives: {
      'fade-in-up': {
        initial: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 600 } },
      },
      'fade-in': {
        initial: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 500 } },
      },
      'scale-in': {
        initial: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 500 } },
      },
      'slide-in-left': {
        initial: { opacity: 0, x: -24 },
        visible: { opacity: 1, x: 0, transition: { duration: 600 } },
      },
      'slide-in-right': {
        initial: { opacity: 0, x: 24 },
        visible: { opacity: 1, x: 0, transition: { duration: 600 } },
      },
    },
  },

  sitemap: {
    siteUrl: 'https://chhaytheanly.github.io/portfolio-v2',
    gzip: true,
    autoLastmod: true
  }

})
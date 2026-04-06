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

  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true
    }
  },

  devtools: { enabled: true },

  app: {
    baseURL: '/portfolio-v2/',
    buildAssetsDir: '/portfolio-v2/_nuxt/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/portfolio-v2/logo/favicon.svg' },
        { rel: 'apple-touch-icon', href: '/portfolio-v2/logo/favicon.svg' },
      ],
      meta: [
        { name: 'description', content: 'Chhaythean Portfolio - AI Enthusiast' },
        { name: 'keywords', content: 'chhaythean portfolio, Chhaythean, Portfolio, AI, Artificial Intelligence, Machine Learning, Deep Learning' },
        { name: 'author', content: 'Chhaythean' },
        { content: 'google00ff2868fffc3b8c.html', name: 'google-site-verification' },
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

  content: {
    database: {
      type: 'sqlite',
      filename: '.data/content/contents.sqlite',
    },
  },
  compatibilityDate: '2024-11-01',

  nitro: {
    prerender: {
      routes: [
        '/',
        '/en',
        '/fr',
        '/km',
        '/about',
        '/en/about',
        '/fr/about',
        '/km/about',
        '/education',
        '/en/education',
        '/fr/education',
        '/km/education',
        '/experience',
        '/en/experience',
        '/fr/experience',
        '/km/experience',
        '/projects',
        '/en/projects',
        '/fr/projects',
        '/km/projects',
        '/contact',
        '/en/contact',
        '/fr/contact',
        '/km/contact',
        '/blog',
        '/en/blog',
        '/fr/blog',
        '/km/blog',
      ],
      crawlLinks: true,
      failOnError: false,
    },
    routeRules: {
      '/portfolio-v2': { static: true },
    },
  },

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
      { code: 'en', name: 'English', iso: 'en-US', dir: 'ltr', file: 'en.json' },
      { code: 'fr', name: 'Français', iso: 'fr-FR', dir: 'ltr', file: 'fr.json' },
      { code: 'km', name: 'ភាសាខ្មែរ', iso: 'km-KH', dir: 'ltr', file: 'km.json' },
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
    bundle: {
      optimizeTranslationDirective: false,
    },
    experimental: {
      hmr: false,
    },
  },

  motion: {
    directives: {
      'fade-in-up': {
        initial: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 600, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' } },
      },
      'fade-in': {
        initial: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 500 } },
      },
      'scale-in': {
        initial: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 500, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' } },
      },
      'slide-in-left': {
        initial: { opacity: 0, x: -24 },
        visible: { opacity: 1, x: 0, transition: { duration: 600, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' } },
      },
      'slide-in-right': {
        initial: { opacity: 0, x: 24 },
        visible: { opacity: 1, x: 0, transition: { duration: 600, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' } },
      },
    },
  },

  sitemap: {
    siteUrl: 'https://chhaytheanly.github.io/portfolio-v2',
    gzip: true
  }
})

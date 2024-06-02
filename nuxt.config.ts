export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@nuxt/fonts'],
  app: {
    head: {
      title: 'CRM-system',
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicon/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon/favicon-16x16.png',
        },
        {
          rel: 'manifest',
          href: '/favicon/site.webmanifest',
        },
        {
          rel: 'mask-icon',
          href: '/favicon/safari-pinned-tab.svg',
          color: '#9873ff',
        },
      ],
      meta: [
        {
          name: 'description',
          content: 'CRM-система управления базой данных клиентов.',
        },
        {
          name: 'apple-mobile-web-app-title',
          content: 'crm-system',
        },
        {
          name: 'application-name',
          content: 'crm-system',
        },
        {
          name: 'msapplication-TileColor',
          content: '#2d89ef',
        },
        {
          name: 'msapplication-config',
          content: '/favicon/browserconfig.xml',
        },
        {
          name: 'theme-color',
          content: '#fff',
        },
      ],
      htmlAttrs: {
        lang: 'ru',
      },
    },
  },
  fonts: {
    defaults: {
      weights: [400, 600, 700],
      styles: ['normal'],
      subsets: ['cyrillic', 'latin'],
    },
  },
});

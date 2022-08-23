import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  app: {
    head: {
      title: 'Groceyish',
      htmlAttrs: { lang: 'en' },
      link: [
        // Favicon
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg',
        },
        // Bunny Fonts
        {
          rel: 'preconnect',
          href: 'https://fonts.bunny.net',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.bunny.net/css?family=quicksand:400,500,600,700',
        },
      ],

      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            "Don't miss our daily amazing deals. Save up to 60% off on your first order",
        },
        // Facebook Meta Tags
        { property: 'fb:app_id', content: '966242223397117' },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:url',
          content: 'https://groceyish.vercel.app/',
        },
        {
          property: 'og:title',
          content: 'All of your gorecry neeed are in one place. Shop Now!',
        },
        { property: 'og:site_name', content: 'Groceyish' },
        {
          property: 'og:description',
          content:
            "Don't miss our daily amazing deals. Save up to 60% off on your first order",
        },
        {
          property: 'og:image',
          content:
            'https://res.cloudinary.com/cloud-m98/image/upload/v1658067530/Groceyish/Website-Screenshot.webp',
        },
        {
          property: 'og:image:secure_url',
          content:
            'https://res.cloudinary.com/cloud-m98/image/upload/v1658067530/Groceyish/Website-Screenshot.webp',
        },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Groceyish' },
        // Twitter Meta Tags
        { name: 'twitter:card', content: 'summary_large_image' },
        {
          property: 'twitter:domain',
          content: 'https://groceyish.vercel.app/',
        },
        {
          property: 'twitter:url',
          content: 'https://groceyish.vercel.app/',
        },
        { property: 'twitter:title', content: 'Groceyish' },
        {
          property: 'twitter:description',
          content:
            "Don't miss our daily amazing deals. Save up to 60% off on your first order",
        },
        {
          property: 'twitter:image',
          content:
            'https://res.cloudinary.com/cloud-m98/image/upload/v1658067530/Groceyish/Website-Screenshot.webp',
        },
      ],
    },
  },

  build: {
    transpile: ['swiper'],
  },

  modules: [
    '@unocss/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image-edge',
    'nuxt-icons',
    '@nuxtjs/strapi',
  ],

  autoImports: {
    dirs: [
      './stores', // Pinia Stores Autoimport
    ],
  },

  unocss: {
    uno: false, // Disable the enabled-by-default preset to prevent conflicts with tailwind
    icons: {
      extraProperties: {
        display: 'block',
      },
    },
    attributify: true,
  },

  image: {
    provider: 'cloudinary',

    cloudinary: {
      baseURL:
        'https://res.cloudinary.com/cloud-m98/image/upload/v1658221710/Groceyish',
      modifiers: { fit: 'cover', format: 'webp', quality: '100' },
    },

    screens: {
      '4xs': 360,
      '3xs': 400,
      '2xs': 480,
      xs: 560,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1440,
    },
  },

  runtimeConfig: {
    public: {
      strapiNewsletterToken: process.env.NEWSLETTER_TOKEN,
    },
  },
});

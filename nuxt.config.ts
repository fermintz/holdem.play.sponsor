// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-swiper'
  ],
  css:[
    '@/assets/styles/reset.scss',
    '@/assets/styles/global.scss',
    'material-icons/iconfont/material-icons.css',
  ],
})

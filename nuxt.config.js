export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  plugins: [
    { src: '~/plugins/scrollreveal.js', mode: 'client' }
  ]
});

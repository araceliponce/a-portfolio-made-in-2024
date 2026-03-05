import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import inject from "@rollup/plugin-inject"; //..for jquery

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    inject({   // => that should be first under plugins array ..for jquery
           $: 'jquery',
        jQuery: 'jquery',
     }),
    vue()],

  // base: '/rooster/',

  //for 404 page:
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        404: './404.html', // Include 404.html as an entry point
      },
    },
  },
  css: {
    preprocessorOptions: {
      // https://stackoverflow.com/questions/68131954/how-to-use-sass-using-in-vuejs3-vite here include things like mixings or variables or any other shared scss
      scss: {
        additionalData: `
          @import "./src/_mixins.scss";
        `
      }
    }
  },
})
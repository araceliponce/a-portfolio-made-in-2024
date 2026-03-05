import { createApp } from 'vue'
import './style.css'
import './styles.min.css'
import App from './App.vue'
import router from './router' //++router
// import '/index.js?url' //inetent importar como index.js (esta en public) y me indico agregar el ?url NO FUNCIONÓ

import './js-in-src.js'

import { autoAnimatePlugin } from '@formkit/auto-animate/vue' //AUTOANIMATE https://auto-animate.formkit.com/#usage-vue


// createApp(App).mount('#app')
// createApp(App).use(router).mount('#app') //++router
createApp(App).use(router).use(autoAnimatePlugin).mount('#app') //++router
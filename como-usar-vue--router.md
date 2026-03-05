* pnpm i vue-router

* this will be your src/main.js (import router and change create...)

    import { createApp } from 'vue'; // Import createApp from Vue 3
    import App from './App.vue';
    import router from './router';

    import './style.css'

    createApp(App).use(router).mount('#app')


* dentro de src crea carpeta router con un index.js dentro

* dentro de src crea carpeta views y componentes vue dentro

* ejm de links:
      <router-link class="tr-link" :to="'/'">home</router-link>
  <router-link class="tr-link" :to="'/library'">library</router-link>

  
* este es el script de tu app.vue
<template>
  <Header></Header>

  <!-- <AllStories /> -->

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <!-- <transition name="scale-slide"> -->
      <Component :is="Component" />
    </transition>
  </router-view>

  <Footer></Footer>
</template>


and also some style 

/* start and end */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* while is entering and whileleaving */
.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s ease-out;
}


/* scale */
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}


/* scale-slide */
.scale-slide-enter-active,
.scale-slide-leave-active {
  position: absolute;
  transition: all 0.85s ease;
}

.scale-slide-enter-from {
  left: -100%;
}

.scale-slide-enter-to {
  left: 0%;
}

.scale-slide-leave-from {
  transform: scale(1);
}

.scale-slide-leave-to {
  transform: scale(0.8);
}

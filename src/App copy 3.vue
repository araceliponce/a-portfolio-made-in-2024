<script setup>
import HelloWorld from './components/HelloWorld.vue';
import Colors from './components/Colors.vue';
import LetterHover from './components/LetterHover.vue';
import LettersMouseOver from './components/LettersMouseOver.vue';

import Charts from './components/Charts.vue';

import Hero from './components/Hero.vue';
import Info from './components/Info.vue';
import Gallery from './components/Gallery.vue';


import Grid from './components/Grid.vue';
import GridB from './components/GridB.vue';
import FallingWords from './components/FallingWords.vue'
import FallingAgain from './components/FallingAgain.vue';


// import GridTestA from './components/GridTestA.vue';
import GridTestB from './components/GridTestB.vue';
import GridTestC from './components/GridTestC.vue';
import GridTres from './components/GridTres.vue';



import { ref, onMounted } from 'vue';
import Tools from './components/Tools.vue';
import { IconIcon } from 'vue3-simple-icons';
import { GithubIcon, LinkedinIcon, GmailIcon } from 'vue3-simple-icons';


const welcome = 'Bienvenida o bienvenido a mi portafolio';
const welcomeExtended = 'Bienvenida o bienvenido al portafolio de Araceli Ponce Sanga';


import Works from './views/Works.vue';
import About from './views/About.vue';
import Solitario from './components/Solitario.vue';

const isHeaderHidden = ref(false);

onMounted(() => {
  // Select the header element
  const header = document.querySelector('#colors');
  // console.log(header)
  // Initialize variables to track scroll direction and scroll position
  let prevScrollPos = window.pageYOffset;

  // Function to handle scroll event
  function handleScroll() {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos < currentScrollPos) {
      // Scrolling down
      if (!isHeaderHidden.value) {
        header.classList.add('hidden');
        isHeaderHidden.value = true;
      }
    } else if (isHeaderHidden.value && currentScrollPos < prevScrollPos - 10) {
      // Mostrar el encabezado si el scroll sube más de 10 píxeles
      header.classList.remove('hidden');
      isHeaderHidden.value = false;

    }

    prevScrollPos = currentScrollPos;
  }

  window.addEventListener('scroll', handleScroll);
});

</script>

<template>
  <div class="grain"></div>

  <!-- v3 -->



  <a class="skip-link button" href="#proyectos">Avanzar hasta el contenido principal</a>

  <header class="portfolio-header group">


    <div class="portfolio-logo main-links">
      <!-- <router-link class="" :to="'/'">Proyectos</router-link>
      <router-link class="" :to="'/acerca-de'">Acerca de</router-link> -->
      <a href="#proyectos">Proyectos</a>
        <a href="#acerca-de">Acerca de</a>

      
    </div>



    <div class="limited">
      <Colors />
    </div>

  </header>



  <nav>
    <button class="nav-toggle" aria-label="Botón para mostrar y ocultar enlaces de contacto">
      <div class="bar"></div>
      <div class="bar"></div>
    </button>
    <div class="mobile-menu-wrapper" style="display: none;">

      <div class="main-menu mobile">
        <ul class="links-are-underlined">
          <li><a href="https://github.com/araceliponce" target="_blank" rel="noopener noreferrer">github.com/araceliponce</a></li>
          <li><a href="https://www.linkedin.com/in/araceliponcesanga/" target="_blank" rel="noopener noreferrer">linkedin.com/in/araceliponcesanga/</a></li>
          <li><a href="mailto:aponcesanga@gmail.com">mailto:aponcesanga@gmail.com</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <main class="site-content portfolio-main" id="contenido">

    <div class="portfolio-content">

      <HelloWorld msg="Desarrollado por Araceli Ponce Sanga" />

      <!-- <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <Component :is="Component" />
        </transition>
      </router-view> -->

      <Works/>
      <About/>
      <Solitario/>
    </div>

  </main>






  <footer class="portfolio-footer">

    <address>
      <ul class="links-are-underlined flex gap-2">
          <li><a href="https://github.com/araceliponce" target="_blank" rel="noopener noreferrer">github.com/araceliponce</a></li>
          <li><a href="https://www.linkedin.com/in/araceliponcesanga/" target="_blank" rel="noopener noreferrer">linkedin.com/in/araceliponcesanga/</a></li>
          <li><a href="mailto:aponcesanga@gmail.com">mailto:aponcesanga@gmail.com</a></li>
        </ul>
    </address>

    <div class="d-sm-none">
      <div class="flex pt-1">
        <!-- <router-link class="tr-link" :to="'/'">Proyectos</router-link>
        <router-link class="tr-link" :to="'/acerca-de'">Acerca de</router-link> -->
        <a href="#proyectos">Proyectos</a>
        <a href="#acerca-de">Acerca de</a>
      </div>
    </div>


  </footer>

</template>

<style scoped lang="scss">
/* https://www.npmjs.com/package/simple-icons */

svg {
  fill: currentColor;
}

.flex-item {
  display: flex;
  align-items: center;
  gap: 1ch;
  padding-block: .5em;
  margin-right: 1rem;
}


/* ++bg */

@keyframes grain {
  0% {
    transform: translate(20%, -15%);
  }

  10% {
    transform: translate(-20%, -15%);
  }

  20% {
    transform: translate(20%, -5%);
  }

  30% {
    transform: translate(-20%, -5%);
  }

  40% {
    transform: translate(20%, 5%);
  }

  50% {
    transform: translate(-20%, 5%);
  }

  60% {
    transform: translate(20%, 15%);
  }

  70% {
    transform: translate(-20%, 15%);
  }

  80% {
    transform: translate(20%, 5%);
  }

  90% {
    transform: translate(-20%, 5%);
  }

  100% {
    transform: translate(20%, -5%);
  }
}

* {
  /* outline: 1px solid red; */
}

.grain {

  position: fixed;
  inset: 0;


  /* background-color: var(--body-bg); */
  /* box-shadow: 0 50vh 0 0 var(--body-bg); */

  z-index: 0;


}

.grain:after {
  content: '';
  animation: grain 7s steps(10) infinite;
  /* background-image: url('assets/grain.png'); */
  background-image: url('/grain.png');
  background-repeat: repeat;
  height: 300%;
  left: -100%;
  opacity: .04;
  pointer-events: none;
  position: fixed;
  top: -100%;
  width: 300%;
  will-change: transform;
}

section,
footer {
  position: relative;
}








/* <!-- <div class="shows-on-sm">
        <div class="flex">
          <a class="flex-item" href="https://github.com/araceliponce" target="_blank" rel="noopener noreferrer">
          <GithubIcon />
          <span class="visually-hidden">Github</span>
        </a>
        <a class="flex-item" href="https://www.linkedin.com/in/araceliponcesanga/" target="_blank" rel="noopener noreferrer">
          <LinkedinIcon />
          <span class="visually-hidden">Linkedin</span>
        </a>
        <a class="flex-item" href="mailto:aponcesanga@gmail.com">
          <GmailIcon />
          <span class="visually-hidden">Email</span>
        </a>
        </div>
      </div> --> 
      
      
      
      
      
      
      
          <!-- <form role="search" class="search-form">
        <label class="screen-reader-text" for="search-form-64bfae31c5dbe">Search for:</label>
        <input type="search" class="search-field" placeholder="Enter your search query" value="" name="s" autocomplete="off" list="cars">
        <datalist id="cars">
          <option>araceliponce.github.io</option>
          <option>araceli en linkedin</option>
        </datalist>
      </form> -->
      
      
      
      
      
      
      
      
      */
</style>

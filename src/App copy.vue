<script setup>
import HelloWorld from './components/HelloWorld.vue';

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



// ++++++++
const diplomas = import.meta.globEager('/public/diplomas/*.png');
const diplomasUrls = Object.values(diplomas).map(image => image.default);
const extractAltText = (url) => {
  // Extract the file name from the URL
  const fileName = url.split('/').pop();

  // Remove file extension (e.g., '.png')
  const altText = fileName.replace(/\.[^/.]+$/, "");

  // Replace underscores with spaces if needed
  const textWithoutUnderscore = altText.replace(/_/g, " ");

  return 'Diploma de ' + textWithoutUnderscore
};



// +++++++

/* const isHeaderHidden = ref(false);

onMounted(() => {
  // Select the header element
  const header = document.querySelector('header');
  console.log(header)
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
}); */

</script>

<template>
  <div class="grain"></div>
  <section class="two contained">
    <header class="">
      <h1><a href="" class="logo">
          <span class="visually-hidden">portafolio de </span>
          araceli
          <span class="visually-hidden">ponce sanga</span>
        </a>
      </h1>
      <!-- <div class="hides-on-md "> -->
      <div class="">
        <button id="navToggle" class="" aria-label="Ver navegación">☰</button>
      </div>
      <nav class="shows-on-md">
        <ol class="gap-1">
          <li>
            <a href="">Proyectos</a>
          </li>
          <li>
            <a href="">Conocimientos</a>
          </li>
          <li>
            <a href="">Contacto</a>
          </li>
        </ol>
      </nav>

    </header>

    <Info />

  </section>




  <HelloWorld msg="Desarrollado por Araceli Ponce Sanga" />

  <section id="proyectos">
    <h2 class="visually-hidden"> Proyectos </h2>
    <!-- <div class="contained"> -->
    <div class="deco-container">
      <div class="deco">
        <span>digital products</span>
        <span>digital products</span>
        <span>digital products</span>
        <span>digital products</span>
        <span>digital products</span>
        <span>digital products</span>
        <span>digital products</span>
      </div>
    </div>
    <Gallery />
    <!-- </div> -->
  </section>




  <section id="tools" class=" contained mt-10 pb-1">


    <div class="mb-5 text-center">
      <h2 class="text-biggest ">Conocimientos</h2>
      <small>O las herramientas que actualmente uso</small>
    </div>


    <div class="">

      <!-- <Tools /> -->
    </div>


  </section>


  <section>
    <div class="mb-5 text-center">
      <h2 class="text-biggest ">Conocimientos</h2>
      <small>Puedo ayudarte con</small>
    </div>
    <GridTestC />
  </section>

  <section>

  </section>

  <section class="contained">
    <div class="mb-5 text-center">
      <h2 class="text-biggest ">Contáctame</h2>
      <small>Convierte tus ideas en realidad</small>
    </div>


  </section>


  <footer id="certificaciones" class="contained">
    <div>
      <p>Araceli Ponce es Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio tenetur consequuntur dolores voluptatum distinctio, quos error, ab inventore impedit omnis unde amet mollitia quis, quam alias vitae ea iusto?</p>
      <address class="grid">
        <a href="mailto:aponcesanga@gmail.com">mailto:aponcesanga@gmail.com</a>
        <a href="" title="github">@araceliponce</a>
      </address>


    </div>
    <ul class="diplomas">
      <li class="diploma" v-for="(diploma, index) in diplomasUrls" :key="index" @click="expandDiploma(index)" :class="{ expanded: expandedDiplomaIndex === index }">
        <a :href="diploma">
          <img :src="diploma" loading="lazy" :alt="extractAltText(diploma)" />
        </a>
      </li>
    </ul>
    <Tools />

  </footer>
</template>

<style scoped>
/* https://www.npmjs.com/package/simple-icons */





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



/* header {

  position: fixed;
  left: 0;
  right: 0;
  text-transform: uppercase;

  transform: translateY(0%);
  transition: transform 0.3s ease-in-out;


  background-color: rgba(54, 53, 54, 0.274);
  color: var(--text-2);
  filter: brigtness(.5);
  backdrop-filter: blur(1rem);

  z-index: 9;


}

header a,
header button {
  display: grid;
  max-height: 2em;
  place-content: center;
margin-block: 1rem;
font-size: 1rem;
font-weight: bold;
color: violet;

}

*/





header .flex {
  align-items: center;
  padding: 0;
}











section {
  /* min-height: 100svh; */
}


svg {
  width: 1rem;
}

footer {
  min-height: 100vh;
  /* background-color: lightgreen; */
}
</style>

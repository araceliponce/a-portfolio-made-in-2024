<script setup>
import HelloWorld from './components/HelloWorld.vue';
import Colors from './components/Colors.vue';



// import GridTestA from './components/GridTestA.vue';
import GridTestB from './components/GridTestB.vue';
import GridTestC from './components/GridTestC.vue';
import GridTres from './components/GridTres.vue';



import { ref, onMounted } from 'vue';
import Tools from './components/Tools.vue';
import { IconIcon } from 'vue3-simple-icons';
import { GithubIcon, LinkedinIcon, GmailIcon, CodepenIcon } from 'vue3-simple-icons';


const welcome = 'Bienvenida o bienvenido a mi portafolio';
const welcomeExtended = 'Bienvenida o bienvenido al portafolio de Araceli Ponce Sanga';


import Works from './views/Works.vue';
import About from './views/About.vue';
import Solitario from './components/Solitario.vue';


import SelectedWork from './components/SelectedWork.vue';
import AboutMe from './components/AboutMe.vue';
import CopedenEmbed from './components/CopedenEmbed.vue';

const isHeaderHidden = ref(false);
const lastUpdated = ref('');


//Last updated:
const getCurrentTime = () => {
  // const now = new Date();
  // return now.toLocaleString(); // Format the time as needed
  const now = new Date();
  const day = now.getDate().toString().padStart(2, '0'); // Obtiene el día y lo ajusta a 2 dígitos
  const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Obtiene el mes (0-11) y lo ajusta a 2 dígitos
  const hours = now.getHours().toString().padStart(2, '0'); // Obtiene las horas y las ajusta a 2 dígitos
  const minutes = now.getMinutes().toString().padStart(2, '0'); // Obtiene los minutos y los ajusta a 2 dígitos
  return `${day}/${month} ${hours}:${minutes}`;

};


onMounted(() => {

  lastUpdated.value = getCurrentTime();

  // Hide the header element on scroll:
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




// To copy email


// copying to the clipboard might not work in all mobile browsers due to security restrictions. If it's not working on your mobile browser, there's an alternative approach you can consider:
const copiedClass = ref('');

const toggleCopied = () => {
  const copyText = 'aponcesanga@gmail.com';

  const input = document.createElement('input');
  input.value = copyText;
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);

  copiedClass.value = 'copied';
  // alert(copiedClass.value)
  setTimeout(() => {
    copiedClass.value = '';
  }, 2000);
};

</script>

<template>
  <a class="skip-link button" href="#proyectos">Avanzar hasta el contenido principal</a>

  <header class="portfolio-header group">

    <!-- desktop nav -->
    <div class="desktop my-auto bg-dark">
      <a class="portfolio-link is-a-link mt-1" href="#proyectos">
        <div class="gradient-wrap icon">
          <div class="meshgradient">
          </div>
        </div>
        <p class="text">Proyectos <br> Una selección de proyectos destacados</p>
      </a>
      <a class="portfolio-link is-a-link mt-1" href="#experiencia">
        <div class="gradient-wrap icon">
          <div class="meshgradient">
          </div>
        </div>
        <p class="text">Experiencia<br> Y conocimientos</p>
      </a>
      <a class="portfolio-link is-a-link mt-1" href="#educacion">
        <div class="gradient-wrap icon">
          <div class="meshgradient">
          </div>
        </div>
        <p class="text">Educación<br> Cursos y personas recomendadas</p>
      </a>
      <a class="portfolio-link is-a-link mt-1" href="#contacto">
        <div class="gradient-wrap icon">
          <div class="meshgradient">
          </div>
        </div>
        <p class="text">Contacto<br> Final del portafolio</p>
      </a>


    </div>

    <!-- mobile nav -->
    <div class="mobile pi caps bold">
      <div class="flex gap-1">
        <a class="portfolio-link" href="#proyectos">Proyectos</a>
        <a class="portfolio-link" href="#acerca-de">Acerca de mí</a>
      </div>
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
          <li><a href="https://github.com/araceliponce" target="_blank" rel="noopener noreferrer">
              <GithubIcon />
              <span>github.com/araceliponce</span>
            </a>
          </li>
          <li><a href="https://codepen.io/araceliponce" target="_blank" rel="noopener noreferrer">
              <CodepenIcon />
              <span>codepen.io/araceliponce</span>
            </a>
          </li>
          <li><a href="https://www.linkedin.com/in/araceliponcesanga/" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon/>
            <span>linkedin.com/in/araceliponcesanga/</span>
          </a>
          </li>     
          <li><a href="mailto:aponcesanga@gmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z" />
              </svg>
              <span>mailto:aponcesanga@gmail.com</span></a></li>
        </ul>
      </div>
    </div>
  </nav>

  <main class="site-content portfolio-main" id="contenido">

    <div class="portfolio-content pt-1 ">

      <HelloWorld msg="Desarrollado por Araceli Ponce Sanga" />

      <div class="portfolio-welcome pi pt-3">
        <p class="fs-2 text-limited le-small not-bold pt-0">
          <span class="">Bienvenida/o al portafolio de Araceli Ponce Sanga</span> <br>
          <span class="italics">desarrolladora web fullstack</span> <br>
          <span class="">especializada en <span class=" italics dotted">llevar proyectos de la idea a la realidad</span> </span>

        </p>






        <div class="flex  gap-small fs-8 pt-1 pb-3">
          <span class="visually-hidden">Puedes encontrarme también en:</span>
          <a class="is-a-link w-fit-content " href="https://github.com/araceliponce" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
            <span class="">@araceliponce</span>
          </a>
          <a class="is-a-link w-fit-content " href="https://codepen.io/araceliponce" target="_blank" rel="noopener noreferrer">
            <CodepenIcon />
            <span class="">@araceliponce</span>
          </a>
          <div class="is-a-link w-fit-content gap-1" :class="copiedClass">
            <a class="  grid-center " href="mailto:aponcesanga@gmail.com">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z" />
              </svg>
              <span class="">aponcesanga@gmail.com</span>
            </a>
            <button type="button" class="btn--copy grid-center" @click="toggleCopied" aria-label="Copiar correo">
              <svg class="" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2">
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </g>
              </svg>
            </button>
          </div>
        </div>


      </div>



      <!-- Selected Work -->
      <section id="proyectos" class="pt-2">
        <SelectedWork />
      </section>






      <!-- About Me -->
      <section id="acerca-de">
        <AboutMe />
      </section>

      <!-- uu -->
      <section id="contacto" class="pt-4 pi contained text-center">
        <div class="flow pb-1">
          <h2 class="smallest">Contacto</h2>
          <p class="fs-3">Envíame un correo</p>
          <p>Estoy en búsqueda de nuevos proyectos</p>
        </div>

        <div class="is-a-link w-fit-content gap-1 mx-auto" :class="copiedClass">
          <a class="  grid-center " href="mailto:aponcesanga@gmail.com">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z" />
            </svg>
            <span class="">aponcesanga@gmail.com</span>
          </a>
          <button type="button" class="btn--copy grid-center" @click="toggleCopied" aria-label="Copiar correo">
            <svg class="" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </g>
            </svg>
          </button>
        </div>


      </section>




      

    </div>

  </main>

  <footer class="portfolio-footer text-center">
    <div class="flex-align-center spaced-around gap-1 pi pb-1">
      <span>Gracias por tu visita!</span>
      <a href="#" class="underlined">Volver arriba!</a>
    </div>

    <div v-if="!welcomeExtended" class=" py-1 border-top border-bottom">Actualizado el {{ lastUpdated }}</div>
    <div class=" py-1 border-top border-bottom">
      <p>Actualizado el: 01 de Noviembre, a las 15:47 horas</p>
    </div>


  </footer>


  <!-- Playground -->
  <section v-if="!welcomeExtended" id="playground" class="pt-4 portfolio-footer ">
        <div class="pi pb-2 flow">
          <h2 class="smallest">Playground</h2>
          <div class="flex-align-center fs-4">
            <p class="bold">Una sección para proyectos más pequeños, esparcidos por el Internet </p>
          </div>
        </div>
        <CopedenEmbed />
      </section>


</template>

<style lang="scss">
/* https://www.npmjs.com/package/simple-icons */








.text-limited {
  /* max-width: 30ch; */
}







.media-scroller {
  @include devices(md) {
    position: relative; //para quitar lo de fixed
    overscroll-behavior-inline: contain;
    grid-template-columns: 1rem 1rem 1rem 1rem;
    padding-left: .5em;

    &>*:hover {
      /* opacity: 0; */
      animation: headShake 1s ease-in 0s infinite normal both;
      /* animation: jello 1s timing-function delay iteration-count direction fill-mode; */
    }

  }
}






.border-top {
  border-top: 1px solid var(--accent-7);
}
.border-bottom {
  border-bottom: 1px solid var(--accent-7);
}

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




section,
footer {
  position: relative;
  background-color: var(--accent-4);
}



:root {
  --for-text: #fafafa;
  --for-text-2: rgba(255, 255, 255, 0.8);
}

body {
  color: var(--for-text);
}
</style>

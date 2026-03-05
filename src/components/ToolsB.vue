<script setup>
import { Html5Icon, MarkdownIcon, JavascriptIcon, JqueryIcon, TypescriptIcon, PhpIcon, Css3Icon, SassIcon, BootstrapIcon, AngularIcon, VuetifyIcon, JekyllIcon, ReactIcon, SupabaseIcon, FirebaseIcon, FigmaIcon, CanvaIcon, GithubIcon, GitlabIcon, TrelloIcon, GoogleanalyticsIcon } from 'vue3-simple-icons'
import Golang from '../icons/Golang.vue'
import Vue from '../icons/Vue.vue'
import Circle from '../icons/Circle.vue'

// import Golang from '../icons/Golang.vue'

</script>

<template>
  <div class="tools-b columns">
    <!-- <p>Tengo experiencia trabajando con:</p> -->
    <h2>conocimientos</h2>
    <p>¿Qué lenguajes y software manejo para la creación de páginas web?  </p>
    <div class="pt-2">

      <h3 class=" mb-1">Los fundamentales</h3>
      <ol class="ol">
        <li>
          <Html5Icon />
          <span>HTML5</span>
        </li>
        <li>
          <Css3Icon />
          <span>CSS3 y SCSS</span>
        </li>
        <li>
          <JavascriptIcon />
          <span>JavaScript</span>
        </li>
        <li>
          <JqueryIcon />
          <span>JQuery</span>
        </li>
        <li>
          <TypescriptIcon />
          <span>TypeScript</span>
        </li>
      </ol>
    </div>
    <div>
      <h3 class=" mb-1">Frameworks</h3>
      <ol class="ol">
        <li>
          <PhpIcon />
          <span>PHP</span>
        </li>
        <li>
          <AngularIcon />
          <span>Angular</span>
        </li>
        <li>
          <Vue />
          <span>Vue</span>
        </li>
        <li>
          <JekyllIcon />
          <span>Jekyll</span>
        </li>
        <li>
          <ReactIcon />
          <span>React</span>
        </li>
      </ol>
    </div>

    <div>
      <h3 class=" mb-1">Bases de datos</h3>
      <ol class="ol">
        <li>
          <SupabaseIcon />
          <span>Supabase</span>
        </li>
        <li>
          <FirebaseIcon />
          <span>Firebase</span>
        </li>
      </ol>
    </div>
    <div>
      <h3 class=" mb-1">Librerías CSS</h3>
      <ol class="ol">
        <li>
          <BootstrapIcon />
          <span>Bootstrap</span>
        </li>
        <li>
          <Circle />
          <span>Angular Material</span>
        </li>
        <li>
          <VuetifyIcon />
          <span>Vuetify</span>
        </li>
        <li>
          <Circle />
          <span>Mantine</span>
        </li>
        <li>
          <Circle />
          <span>Semantic UI</span>
        </li>
      </ol>
    </div>
    <div>
      <h3 class=" mb-1">Software de diseño</h3>
      <ol class="ol">
        <li>
          <FigmaIcon />
          <span>Figma</span>
        </li>
        <li>
          <Circle />
          <span>Photoshop</span>
        </li>
        <li>
          <CanvaIcon />
          <span>Canva</span>
        </li>

      </ol>
    </div>

    <div>
      <h3 class=" mb-1">Y más</h3>
      <ol class="ol">
        <li>
          <GithubIcon />
          <span>Github</span>
        </li>
        <li>
          <GitlabIcon />
          <span>Gitlab</span>
        </li>
        <li>
          <TrelloIcon />
          <span>Trello</span>
        </li>
        <li>
          <MarkdownIcon />
          <span>Markdown</span>
        </li>
        <!-- <li>
          <Golang />
          <span>Golang</span>
        </li> -->
        <li>
          <GoogleanalyticsIcon />
          <span>Google Analytics</span>
        </li>
      </ol>
    </div>
  </div>
</template>

<style scoped lang="scss">


/* para que se vean en dos columnas en mobile */
ol{
  display: grid;
  grid-template-columns: 1fr 1fr;

  @include devices (sm){
    grid-template-columns: 1fr;
  }
}



.columns {
  columns: min(18rem, 20ch) !important;
  columns: min(18rem, 25ch) !important;
  column-gap: 3rem;
  text-align: start;
  /* font-size: 130%; */
  
}

.columns>div {
  break-inside: avoid;
  margin-bottom: .5em;
  /* space betweengroups, like between librerias y softwares */

}



.ol {
  display: grid;
  gap: .5rem;

}

/* svg + text */
.ol li {


  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 30% 70%;
  grid-template-columns: auto 1fr;


  /* background: rgba(255, 255, 255, .12); */
  /* background-color: var(--text-5); */

  box-shadow: rgba(27, 31, 35, 0.04) 0px 1px 0px 0px;
  backdrop-filter: blur(1rem);
  /* outline: 1px solid currentColor; */
  border-radius: var(--radius, .3rem);
}

svg {

  /* min-width: var(--size); */

  padding: .7em;
  /* display: grid; */
  place-content: center;
  justify-content: start;
  width: var(--svg-size);
  height: var(--svg-size);


  margin-inline: auto;
}



svg+span {
  letter-spacing: -0.3px;
  display: grid;
  align-content: center;
  /* font-size: var(--fs-4); */
  font-size: .8em;
  padding-right: 1em;
  opacity: .8;
}


</style>
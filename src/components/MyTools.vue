<script setup>
import { Html5Icon, MarkdownIcon, JavascriptIcon, JqueryIcon, TypescriptIcon, PhpIcon, Css3Icon, SassIcon, BootstrapIcon, AngularIcon, VuetifyIcon, JekyllIcon, ReactIcon, SupabaseIcon, FirebaseIcon, FigmaIcon, CanvaIcon, GithubIcon, GitlabIcon, TrelloIcon, GoogleanalyticsIcon } from 'vue3-simple-icons'
import Golang from '../icons/Golang.vue'
import Vue from '../icons/Vue.vue'
import Circle from '../icons/Circle.vue'

// import Golang from '../icons/Golang.vue'

</script>

<template>
  <div class="pi">
    <h2 class="smallest">Experiencia</h2>
    <p class="fs-3 bold">¿Dónde he trabajado? <br> ¿Qué herramientas manejo? </p>
    <div class="fs-3 flow">
      <p class="">He trabajado como <em>diseñadora</em> y <em>desarrolladora</em> independiente, utilizando: <span class="dotted">Figma, PHP, HTML5, CSS3/SCSS, JavaScript, JQuery y librerías como Semantic UI y Bootstrap</span>.</p>
      <p>Me encuentro explorando el <em>desarrollo backend</em>, con <span class="dotted">PHP</span> y <span class="dotted">SQL</span>.</p>
      <p>Para proyectos personales, uso más herramientas relacionadas a <em class="dotted">SEO</em>, <em class="dotted">optimización de carga</em> y <em class="dotted">accesibilidad</em>. Como
        <span class="dotted">Google Analytics</span>, <a class="" href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">PageSpeed Insights</a>
        y 
        <a class="" href="https://colourcontrast.cc/" target="_blank" rel="noopener noreferrer">Colour Contrast Checker</a>.
      </p>
    </div>
    <p class="pt-2 fs-4">Lenguajes y herramientas que uso principalmente:</p>

  </div>
  <div class="my-tools columns ">
    <div class="">
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





.columns {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  gap: 1rem;
  padding-left: var(--spacer);

  &>*{
    flex-shrink: 0;
  }

  &>*:last-child{
    margin-right: 4rem;
  }
}


@media (hover:hover) {
  .columns {
    display: block;
    overflow-x: hidden;
    padding-top: 1rem;

    columns: min(18rem, 20ch) !important;
    columns: min(10rem, 20ch) !important;
    columns: min(20rem, 30ch) !important;
    text-align: start;

    color: var(--for-text-2);

    column-gap: 1rem;

    &>*:last-child{
    margin-right: 0;
  }

    @include devices(md) {
      column-gap: 2rem;
    }

  }

}


h3 {
  color: var(--for-text);

}

.columns>div {
  break-inside: avoid;
  margin-block: 3rem .5rem;
  padding: 1em 1em;
  border-radius: .3rem;
  /* min-width: fit-content; */

}



.ol {
  display: grid;
  gap: .2em;
  grid-template-columns: 1fr 1fr;
  /* background-color: pink; */

}

.ol li {


  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 30% 70%;
  grid-template-columns: auto 1fr;


}

svg {

  padding-right: .5em;

  /* display: grid;
  place-content: center;
  justify-content: start; */
  width: var(--svg-size);
  height: var(--svg-size);


  margin-inline: auto;
}



svg+span {
  letter-spacing: -0.3px;
  display: grid;
  align-content: center;
  font-size: .9rem;
  margin-block: auto;
  /* opacity: .8; */
}


.mobile-span {
  column-span: all;
  padding-bottom: 2rem;

  @include devices(md) {
    column-span: unset;
    padding-bottom: 0;

  }

  background-color: transparent;
  box-shadow: none;
  outline: none;
  border: none;
  padding: 0 !important;
}
</style>
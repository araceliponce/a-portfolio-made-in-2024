<script setup>
import { Html5Icon, MarkdownIcon, JavascriptIcon, JqueryIcon, TypescriptIcon, PhpIcon, Css3Icon, SassIcon, BootstrapIcon, AngularIcon, VuetifyIcon, JekyllIcon, ReactIcon, SupabaseIcon, FirebaseIcon, FigmaIcon, CanvaIcon, GithubIcon, GitlabIcon, TrelloIcon, GoogleanalyticsIcon } from 'vue3-simple-icons'
import Golang from '../icons/Golang.vue'
import Vue from '../icons/Vue.vue'
import Circle from '../icons/Circle.vue'

// import Golang from '../icons/Golang.vue'

</script>

<template>
  <div class="bento">
    <div class="dev">
      <p class="bold mb-1">Programación</p>
      <ol>
        <li>
          <Html5Icon />
          <span>HTML5</span>
        </li>
        <li>
          <MarkdownIcon />
          <span>Markdown</span>
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

        <li>
          <Golang />
          <span>Golang</span>
        </li>
        <li>
          <PhpIcon />
          <span>PHP</span>
        </li>
      </ol>
    </div>
    <div class="frameworks">
      <p class="bold mb-1">Frameworks</p>
      <ol>
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
    <div class="libraries">
      <p class="bold mb-1">CSS</p>
      <ol>
        <li>
          <Css3Icon />
          <span>CSS3 y SCSS</span>
        </li>
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
    <div class="databases">
      <p class="bold mb-1">Bases de datos</p>
      <ol>
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
    <div class="design">
      <p class="bold mb-1">Diseño</p>
      <ol>
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
    <div class="office">
      <p class="bold mb-1">Administración</p>
      <ol>
        <li>
          <Circle />
          <span>MS Excel, VBA, Power Query</span>
        </li>
        <li>
          <Circle />
          <span>Power BI</span>
        </li>
        <li>
          <GoogleanalyticsIcon />
          <span>Google Analytics</span>
        </li>
        <li>
          <GoogleanalyticsIcon />
          <span>Google Data Studio</span>
        </li>
        <li>
          <Circle />
          <span>Google App Scripts</span>
        </li>

      </ol>
    </div>
    <div class="collab">
      <p class="bold mb-1">Trabajo colaborativo</p>
      <ol>
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
      </ol>
    </div>
  </div>
</template>

<style scoped>
.bento {
  display: flex;
  gap: 4rem;
  flex-wrap: wrap;
  align-items: stretch;
  /* gap: 1rem; */
}

.bento ol {
  display: flex;
  gap: 2ch;

  text-align: center;
  line-height: .9;
  font-size: 80%;

  /* margin-block: auto; */
  /* to center verticali the group of icons */
}


@media screen and (max-width:800px) {
  .bento ol {
    display: flex;
    gap: 1ch;
    flex-wrap: wrap;
    /* but they need to wrap in small vw */
  }
}

@media (hover:hover) {
  .bento ol {
    display: flex;
    gap: 1ch;
    /* flex-wrap: wrap; */
    /* i like much better if they do not wrap */
  }

  .bento>* {
    display: flex;
    /* background-color: blue; */
  }

  .bento>*>*:first-child {
    /* background-color: pink; */
    text-orientation: upright;
    writing-mode: vertical-lr;
    text-transform: uppercase;
    font-family: monospace;
    /* text-align: center; */
    /* in case container is bigger bc sibling on same row */

    max-height: 7em;
    letter-spacing: -1.5px;
  }
}

.bento img,
.bento svg {
  --size: 3.5rem;

  min-width: var(--size);
  background: rgba(255, 255, 255, .12);
  backdrop-filter: blur(1rem);
  padding: .7em;
  border-radius: .3rem;
  display: grid;
  place-content: center;
  width: var(--size);
  height: var(--size);
  /* margin-right: .3rem; */

  fill: currentColor;
  color: orange;
  margin-inline: auto;
}

.bento ol li {
  gap: .3rem;
  /* white-space: nowrap; */

  display: grid;
  /* grid-auto-flow: column; */

  align-content: start;
  max-width: 4rem;

}

.bento svg+span {
  letter-spacing: -0.3px;
}
</style>
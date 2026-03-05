<script setup>
import { Html5Icon, MarkdownIcon, JavascriptIcon, JqueryIcon, TypescriptIcon, PhpIcon, Css3Icon, SassIcon, BootstrapIcon, AngularIcon, VuetifyIcon, JekyllIcon, ReactIcon, SupabaseIcon, FirebaseIcon, FigmaIcon, CanvaIcon, GithubIcon, GitlabIcon, TrelloIcon, GoogleanalyticsIcon } from 'vue3-simple-icons'
import Vue from '../icons/Vue.vue'


</script>


<template>
  <div class="info pb-1">
    <h1 class="info__line">
      Araceli Ponce Sanga
    </h1>
    <div class="info__line">
      Desarrolladora Digital
    </div>
    <div class="info__line">
      <span class="visually-hidden">Me especializo en: </span>
      <span>Diseño UX/UI</span>
      <span>y</span>
      <span>Maquetación web</span>
    </div>
    <div class="info__line tools flex-wrap mt-2 ">
      <span class="visually-hidden">Usando: </span>
      <ul class="flex-wrap">
        <!-- <li>
          <span>Figma</span>
          <FigmaIcon />
        </li> -->
        <li>
          <span>HTML5</span>
          <Html5Icon />
        </li>
        <li>
          <span>CSS</span>
          <Css3Icon />
        </li>
        <li>
          <span>JavaScript</span>
          <JavascriptIcon />
        </li>
        <!-- <li>
          <span>JQuery</span>
          <JqueryIcon />
        </li> -->
        <li>
          <span>Vue3</span>
          <Vue />
        </li>
        <li>
          <span>PHP</span>
          <PhpIcon />
        </li>
        <!-- <li class=""><a class="" href="#footer"></a></li> -->
      </ul>

    </div>

  </div>
</template>

<style scoped>
.info {
  --font-size: clamp(2.49rem, calc(2.03rem + 2.31vw), 3.82rem);
  --font-size: clamp(1.8rem, calc(2rem + 2.3vw), 4rem);
  --speed: 0.25s;
}



::selection {
  background: hsl(320 80% 50%);
}





.info__line>a {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  text-transform: lowercase;
}


.info {
  color: var(--text);
  text-transform: uppercase;
  font-size: var(--fs-2);
  line-height: 1;
  font-weight: bold;


  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  letter-spacing: -1px;
}

.info__line>a {
  /* color: var(--text); */
  /* font-size: 70%; */
}

.info__line {
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  gap: 0;
  width: 100%;

}

.info__line>* {
  padding-right: 1ex;
}

.break {
  word-break: break-all;

}

.info__line {
  /* display: grid;
  align-items: center;
  grid-auto-flow: row;
  max-width: 100%; */
  /* background: pink; */
}

@media screen and (min-width: 1000px) {
  .info__line {

    /* grid-auto-flow: column; */
    /* background: coral; */
    /* justify-content: space-between; */
  }

  .info__line>span {

    /* width: fit-content; */
  }

}

.info__line:first-child {
  display: flex;
  flex-wrap: wrap;
  font-size: var(--font-size);

}

.info__line:nth-child(2) {
  color: var(--pink, violet);
  /* font-size: 70%; */
}

.small {
  font-size: 50%;
}




/* for the ul of tools */
.tools {
  font-size: 2rem;
  text-align: end;
  display: flex;


  /* max-width: 50%; */
  width: min(90%, 30rem);
  margin-left: auto;
  /* background-color: pink; */
  text-transform: none;

}

.tools span {
  /* background-color: yellow; */
  /* margin-left: auto; */
}

a {
  font: inherit;
}

ul {
  --gap: 2em;
  letter-spacing: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  gap: 1ex;
  line-height: 0;
  font-size: 70%;
}

li {
  padding-left: var(--gap);
}

ul svg {
  --size: 2rem;
  width: var(--size);
  height: var(--size);
  padding: .5rem;
  display: grid;
  background-color: violet;
  background-color: rgba(238, 130, 238, 0.9);
  margin-left: 1ch;

  border-radius: .5rem;
  text-transform: none;
}


li {
  display: inline-flex;
  align-items: center;
  color: var(--white);
  fill: var(--white);
  position: relative;
}


li+li::after {
  content: '+';
  position: absolute;
  /* left: calc(var(--gap) / -2); */
  left: calc(var(--gap) / 4);
}


li:nth-child(n+5)::after {
  /* content: ''; */
}
</style>
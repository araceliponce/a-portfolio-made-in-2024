<template>
  <div class="tabbed pi" v-auto-animate>
    <ul role="tablist" class="">
      <li v-for="(tab, index) in tabs" :key="index" role="presentation">
        <a :href="'#recomendados' + (index + 1)" :id="'tab' + (index + 1)" role="tab" :tabindex="index === selectedTabIndex ? 0 : -1" :aria-selected="index === selectedTabIndex ? 'true' : 'false'" @click="switchTab(index)" @keydown="handleTabKeyDown(index, $event)">
          {{ tab }}
        </a>
      </li>
    </ul>
    <!-- <div v-auto-animate> -->
    <section v-for="(panel, index) in panels" :key="index" :id="'recomendados' + (index + 1)" role="tabpanel" :tabindex="index === selectedTabIndex ? 0 : -1" :aria-labelledby="'tab' + (index + 1)" :hidden="index !== selectedTabIndex" class="pi">
      <!-- <h2 class="pb-1 text-normal">{{ tabTitles[index] }}</h2> -->
      <div v-html="panel"></div>
    </section>
    <!-- </div> -->

  </div>
</template>


<script setup>
import { ref } from 'vue';
const tabs = ["Creadores de contenido", "Sitios recomendados"];
const tabTitles = ["6 creadores expertos que comparten sus conocimientos y aprendizajes a través del Internet", "5 sitios imprescindibles para completar un sitio o app web al 100%"];
const selectedTabIndex = ref(0);

const switchTab = (index) => {
  selectedTabIndex.value = index;
};

const handleTabKeyDown = (index, event) => {
  if (event.key === "ArrowLeft" && index > 0) {
    switchTab(index - 1);
    event.preventDefault();
  } else if (event.key === "ArrowRight" && index < tabs.length - 1) {
    switchTab(index + 1);
    event.preventDefault();
  }
};

const panels = [
  `<ol class="links">
      <li>
        <a href="https://www.youtube.com/@KevinPowell" target="_blank" rel="noopener noreferrer">Kevin Powell</a>
      </li>
      <li>
        <a href="https://www.joshwcomeau.com/" target="_blank" rel="noopener noreferrer">Josh Comeau</a>
      </li>
      <li>
        <a href="https://jhey.dev/links/" target="_blank" rel="noopener noreferrer">Jhey Tompkins</a>
      </li>
      <li>
        <a href="https://www.youtube.com/@Dani_Krossing" target="_blank" rel="noopener noreferrer">Dani Krossing</a>
      </li>
      <li>
        <a href="https://www.youtube.com/@LearnVue" target="_blank" rel="noopener noreferrer">LearnVue</a>
      </li>
      <li>
        <a href="https://www.youtube.com/@webbae" target="_blank" rel="noopener noreferrer">Web Bae</a>
      </li>
    </ol>`,
  `<ol class="links">
    <li>
        <a href="https://colourcontrast.cc/" target="_blank" rel="noopener noreferrer">Colour Contrast Checker</a>
      </li>
    <li>
        <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">PageSpeed Insights</a>
      </li>
      <li>
        <a href="https://icones.js.org/" target="_blank" rel="noopener noreferrer">Icones</a>
      </li>
      <li>
        <a href="https://www.lapa.ninja/" target="_blank" rel="noopener noreferrer">Lapa Ninja</a>
      </li>
    </ol>
    `,


];
</script>


<style lang="scss">
.tabbed {
  line-height: 1.3;
}










[role="tablist"] [aria-selected] {
  overflow: hidden;

  text-decoration: none;
  padding: 0.5em .7em;
  position: relative;
  color: var(--accent-5);
  font-weight: 600;
  outline-offset: -1px;
}



[role="tablist"] [aria-selected="true"] {
  color: var(--accent-1);
  outline: 1px solid white;



  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: .1em;
    /* no es - */
    height: .1em;
    position: relative;
    background-color: var(--accent-1);
  }
}



section[role="tabpanel"] {
  /* outline: 2px solid currentColor; */
  /* outline-offset: -1px; */
  padding-block: var(--spacer);
  padding-inline: var(--spacer);


  @include devices(lg) {}
}


.tabbed section .links {
  columns: 18ch;
  gap: .5em;

  &>* {
    margin-bottom: .5rem;
    /* tmb sirve para separacion con el small text que va debajo de .links */
  }
}


.tabbed section .links a {
  padding-block: .5em .5em;
  padding-inline: .7em 1.7em;
  word-break: keep-all;
  //links with arrows

  position: relative;

  &:after {
    content: '  →';
    position: absolute;
    width: 1em;
    padding-left: .5ch;
    transition: all .2s ease;
  }

  &:hover::after {
    transform: translate(.5ch, 0);
    transition: all .2s ease;

  }
}




*:focus {
  outline: none;
  box-shadow: inset 0 0 0 3px var(--accent-5);
  outline-offset: -3px;

}


[hidden] {
  display: none;
}
</style>


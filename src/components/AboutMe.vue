<script setup>

import MyTools from '../components/MyTools.vue';
import LetterHover from '../components/LetterHover.vue';
import LettersMouseOver from '../components/LettersMouseOver.vue';
import People from '../components/People.vue';
import { YoutubeIcon } from 'vue3-simple-icons';


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


const welcomeExtended = 'Hago Maquetación de sitios web + Diseño UX/UI + Optimización Lighthouse';


</script>

<template>

  <section id="experiencia" class="pt-5 to-the-start">
    <MyTools />
  </section>

  <section id="educacion" class="pt-5 to-the-end">
    <div class="pi flow">
      <h2 class="smallest">Educación</h2>
      <div class=" fs-3">
        <p class="bold">¿De dónde he aprendido? </p>
        <p class=""><span class="dotted">Cursos que llevé recientemente</span>, y <span class="dotted">personas de las
            que he aprendido y continúo aprendiendo</span>.</p>
      </div>
    </div>
    <div class="pt-2">

      <div>
        <ol class="links d-none">
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
        </ol>
      </div>


      <ul class="diplomas">
        <li class="diploma" v-for="(diploma, index) in diplomasUrls" :key="index" @click="expandDiploma(index)"
          :class="{ expanded: expandedDiplomaIndex === index }">
          <a :href="diploma">
            <img :src="diploma" loading="lazy" :alt="extractAltText(diploma)" />
          </a>
        </li>

        <li class="diploma no-diploma">
          <p class="caps text-center dotted">Reconocimientos especiales:</p>
          <ol class="text-center small">
            <li>
              <a href="https://www.youtube.com/@KevinPowell" target="_blank" rel="noopener noreferrer">
                <YoutubeIcon />
                Kevin Powell
              </a>
            </li>
            <li>
              <a href="https://www.joshwcomeau.com/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="m22 3l-1.67 1.67L18.67 3L17 4.67L15.33 3l-1.66 1.67L12 3l-1.67 1.67L8.67 3L7 4.67L5.33 3L3.67 4.67L2 3v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V3zM11 19H4v-6h7v6zm9 0h-7v-2h7v2zm0-4h-7v-2h7v2zm0-4H4V8h16v3z" />
                </svg>
                Josh Comeau</a>
            </li>
            <li>
              <a href="https://jhey.dev/links/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor"
                    d="m22 3l-1.67 1.67L18.67 3L17 4.67L15.33 3l-1.66 1.67L12 3l-1.67 1.67L8.67 3L7 4.67L5.33 3L3.67 4.67L2 3v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V3zM11 19H4v-6h7v6zm9 0h-7v-2h7v2zm0-4h-7v-2h7v2zm0-4H4V8h16v3z" />
                </svg>
                Jhey Tompkins</a>
            </li>
            <li>
              <a href="https://www.youtube.com/@Dani_Krossing" target="_blank" rel="noopener noreferrer">
                <YoutubeIcon />
                Dani Krossing
              </a>
            </li>
          </ol>
        </li>
      </ul>

    </div>



  </section>
</template>
<style lang="scss" scoped>
.d-none {
  display: none;
}

.pi {
  padding-inline: var(--spacer);
}

.pb {
  padding-block: var(--spacer);
}


section {
  position: relative;
}






#experiencia {
  padding-inline: 0;

}




#educacion {
  padding-inline: 0;
  margin-left: auto;
}














/* Diplomas */

.diplomas {

  gap: 1rem;

  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  align-items: stretch;
  // para que en celular se strechee en altura
  padding-block: var(--spacer);




  @include devices (sm) {
    max-width: 100%;
    overflow: hidden;
  }

}

.diplomas>* {
  min-width: min(25rem, 60vw);

  height: inherit;





}



.diploma:first-child {
  margin-left: 3rem;
  /* en media no hover deslizado el primer item */
}


@media (hover:hover) {
  .diplomas {
    display: grid;
    grid-template-columns: repeat(2, 1fr);


    align-content: start;
    overflow-x: hidden;
    padding-inline: var(--spacer);

    &>* {
      min-width: 0;
      // en lugar de none
    }

    .diploma:first-child {
      margin-left: 0;
    }
  }

}



.diploma.no-diploma {
  /* background: pink; */
  display: grid;
  align-items: start;



}


.no-diploma ol {
  display: flex;
  flex-wrap: wrap;
  gap: .5em;
  line-height: 1;

  padding-top: .7em; //separacion del 'agradecimientos especiales'
  font-size: var(--fs-8);
  font-size: 1rem;

  &>* {
    flex-basis: 100%;
  }
}

.no-diploma a {
  word-break: keep-all;
  display: grid;
  align-content: center;
  align-items: center;
  justify-content: center;
  grid-auto-flow: column;
  text-align: end;
  gap: .5ch;
  height: 1.8em;

  & svg {
    width: 1em;
  }
}


@media (hover:hover) {
  .diploma.no-diploma {
    padding-block: 1rem;
  }

  .no-diploma a {
    height: 2.5em;
  }
}
</style>
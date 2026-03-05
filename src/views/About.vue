<script setup>

import Tools from '../components/Tools.vue';
import ToolsB from '../components/ToolsB.vue';
import LetterHover from '../components/LetterHover.vue';
import LettersMouseOver from '../components/LettersMouseOver.vue';
import People from '../components/People.vue';

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


const welcomeExtended = 'Hago Maquetación de sitios web + Diseño UX/UI + Optimización Lighthouse';


</script>

<template>
  <section id="acerca-de" >
    <div class="portfolio-hero mt-1">
      <!-- <h1>{{welcomeExtended}}</h1> -->
      <div class="contained">
        <h1>{{ welcomeExtended }}</h1>
      </div>
    </div>





    <section id="conocimientos">
      <ToolsB />
    </section>

    <section id="educacion" class="pt-5 ">
      <div class="pi">
        <h2>Educación</h2>
        <p>¿De dónde he aprendido? </p>
        <p>Cursos, canales en Youtube y blogs:</p>
      </div>
      <div class="grid pt-2">
        <ul class="diplomas">
          <li class="diploma" v-for="(diploma, index) in diplomasUrls" :key="index" @click="expandDiploma(index)" :class="{ expanded: expandedDiplomaIndex === index }">
            <a :href="diploma">
              <img :src="diploma" loading="lazy" :alt="extractAltText(diploma)" />
            </a>
          </li>
        </ul>

        <People/>


       
      </div>


    </section>

  </section>
</template>
<style lang="scss" scoped>
.d-none{
  display: none;
}
.pi {
  padding-inline: var(--spacer);
}
.pb {
  padding-block: var(--spacer);
}




.portfolio-hero,
#conocimientos,
#educacion {
  max-width: 1200px;

  /* background-color: pink; */
  &>* {
    max-width: 100%;
    /* outline: 1px solid red; */
  }
}

#conocimientos {
  padding-inline: var(--spacer);

  @include devices(sm) {
    padding-left: min(10%, 20vw);

  }

}




#educacion {
  padding-inline: 0;
  margin-left: auto;
}

#educacion .grid {
  display: grid;
  align-content: start;

  gap: 1rem;
  /* font-size: 130%; */

  @include devices (md) {
    grid-template-columns: 1.5fr 30ch;
    grid-template-columns: 2fr 1fr;
  }

}




section {
  position: relative;
}

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

  /* outline: 1px solid currentColor; */
  /* border-radius: var(--radius, .3rem); */

  
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

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
    /* para que en compu no se strecjhee */
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



</style>
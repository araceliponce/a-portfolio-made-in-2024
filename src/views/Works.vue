<script setup>
import Gallery from '../components/Gallery.vue';
import GalleryGrid from '../components/Gallery--grid.vue';
import LetterHover from '../components/LetterHover.vue';
import LettersMouseOver from '../components/LettersMouseOver.vue';

const welcomeExtended = 'Bienvenida/o al portafolio de Araceli Ponce Sanga. Desarrolladora Digital';
import Colors from '../components/Colors.vue';

</script>

<template>
  <section id="proyectos">

    <div class="portfolio-hero mt-1">
      <p class="contained">{{ welcomeExtended }}</p>
    </div>

    <h1 class="visually-hidden">Proyectos de Araceli</h1>
    <section class="gallery">
      <h2 class="visually-hidden">Proyectos destacados: </h2>
      <GalleryGrid />

    </section>




  </section>
</template>


<style scoped lang="scss">
section.gallery {
  padding-inline: 0;

  & h2 {
    padding-inline: var(--spacer);
    // a section.gallery le quite el padding y se lo aplique a la lista y al heading */

  }

}

/* .project{ */
li {
  background-color: white;
  padding: .5rem;
  border-radius: .3rem;
  outline: 1px solid currentColor;
  overflow: clip;
}

.winter li,
.summer li {
  background-color: rgba(255, 255, 255, 0.778);
  color: #333;
}
</style>
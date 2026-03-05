<template>
  <!-- <div class="is-contained"> -->
  <div class="contained">
    <div id="gallery" :class="{ 'animated': animationClass }">
      <div class="filtros filters">
        <button :class="['filtro btn--custom', { active: FILTER_ALL_PROJECTS === selectedCat }]" @click="filterItems(FILTER_ALL_PROJECTS)">
          <span class="backdrop">
          </span>
          <span class="text">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd" />
            </svg>
            Todos ({{ items.length }})
          </span>
        </button>
        <button :class="['filtro btn--custom', { active: category === selectedCat }]" v-for="category in categories" :key="category" @click="filterItems(category)">
          <span class="backdrop">
          </span>
          <span class="text">
            {{ category }} ({{ countItemsWithCategory(category) }})
          </span>
        </button>
      </div>


      <ul v-auto-animate name="list" tag="ul" class="list projects" role="list">

        <!-- <ul class="portfolio contained pt-2" role="list"> -->
        <li v-for="(item, index) in filteredItems" :key="index" @mouseenter="playGif(index)">
          <article class="project" :id="item.id" :data-id="item.id">

            <h3 translate="no" class="project__title">
              <a :href="item.url" target="_blank" rel="noopener noreferrer" class="">
                <span class="visually-hidden">Ver el projecto:</span>
                <span>{{ item.title }}
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3h-7z" />
                  </svg>
                </span>

              </a>
            </h3>

            <div class="project__meta">
              <time datetime="" class="project__date">
                {{item.lastUpdate}}
              </time>
              <!-- <p class="project__involvement">
                <span class="" v-for="cat in item.cats" :key="cat"> [{{ cat }}]</span>
              </p> -->
              <p class="project__desc">{{item.desc}}</p>
            </div>
            <ul class="project__tools">
              <li v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</li>
            </ul>

            <a class="project__image mobile" :href="item.imageMobileSrc">

              <img width="100" height="200" :src="item.imageMobileSrc" :alt="item.alt" :data-name="item.name">
            </a>

            <a class="project__image desktop" :href="item.imageDesktopSrc">
              <img width="690" height="590" :src="item.imageDesktopSrc" :alt="item.alt" loading="lazy" :data-name="item.name" />
            </a>

            <!-- <a :href="item.url" target="_blank" rel="noopener noreferrer" class="project__link">ver el projecto</a> -->




          </article>

        </li>

        <!-- </ul> -->
      </ul>
    </div>
  </div>
</template>

<script setup>
//   <!--  material-symbols:arrow-circle-right -->



import { ref, onMounted } from 'vue';

import jsonData from './../assets/projects.json';
import { FILTER_ALL_PROJECTS } from '../consts';


// el contenedor tiene la clase .animated que quitamos despues de un segundo
// porque cada vez que filtrabamos como tenian un delay de .7s demoraba mucho

const animationClass = ref(true);

onMounted(() => {
  // Remove the class after 1 second
  setTimeout(() => {
    animationClass.value = false;
  }, 1300);
});



// 690 x 590 (tamaño de gifs)
const items = ref(jsonData);

const categories = items.value.reduce((unique, item) => {
  item.cats.forEach(cat => {
    if (!unique.includes(cat)) {
      unique.push(cat);
    }
  });
  return unique;
}, []);

// const selectedCat = ref('Todo');
const selectedCat = ref(FILTER_ALL_PROJECTS);

const playGif = index => {
  // alert('hi')
  items.value[index].isGif = true;
};

const resetImage = index => {
  items.value[index].isGif = false;
};

// updates the selectedCat and filteredItems based on the selected category
const filterItems = cat => {
  selectedCat.value = cat;
  if (cat === 'Todo') {
    filteredItems.value = items.value;
  } else {
    filteredItems.value = items.value.filter(item => item.cats.includes(cat));
  }
};

const filteredItems = ref(items.value);




// para contar: esta funcion y la agregamos a cada boton
function countItemsWithCategory(category) {
  return items.value.filter(item => item.cats.includes(category)).length;
}
</script>

<style scoped lang="scss">
.is-contained {
  max-width: 900px;
  /* padding-inline: var(--spacer); */
  width: 100%;
  margin-inline: auto;
  /* background-color: rebeccapurple; */
  position: relative;
}


ul {
  padding-left: 0;
}

li {
  list-style: none;
}


.projects>* {
  border-bottom: 1px solid currentColor;
  padding: 2px;
  /* solo un poco de paadiing */
}

.project {
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-columns: repeat(3, 1fr) 100px;
  
  grid-template-rows: unset;
  /* background-color: gray; */
  position: relative;

  font-weight: 400;

}

.project:before {
  font-size: .8rem;
  margin-bottom: 1em;
  content: "0" attr(data-id);
  transform: translate(0, -100%);
  opacity: .8;
  position: absolute;


  //en otra esquina
  transform: translate(0, 100%);
  bottom: 1rem;
  right: 0;


  @include devices (md) {
    position: absolute;
    left: 0;
    right: unset;
  }
}


.project__title {
  /* font-size: var(--fs-2, .1rem); */
  font-size: 2.5rem;
  line-height: 1;
  grid-column-end: span 3;
  grid-row: 1;
  margin-top: 0;
  /* margin-bottom: .5rem; */
  text-transform: uppercase;
  hyphens: auto;


  display: grid;
  align-content: end;
  width: fit-content;
  /* para no darle todo el width */
  height: fit-content;
  font-weight: 400;

  &>a {
    color: var(--accent-1);
  }

  & svg {
    /* background-color: white; */
    padding: .05em;
    transform: translate(0, .1em);


    border-radius: .3rem;
    width: min(.7em, 2rem);
    opacity: .8;
    /* display: none; */

    @include devices(md) {
      display: inline-block;


    }
  }

  @include devices(md) {
    /* font-weight: 500; */
  }

}



.project__link {
  /* font-size: .75rem; */
  font-size: 1rem;
  grid-column: 1/span 3;

  text-transform: uppercase;

  background-color: white;
  color: var(--accent-1);
  padding: .05em;
  width: fit-content;
  opacity: .8;


  margin-top: 1.5rem;
  line-height: .8;

  /* padding-block: .7em; */
  /* padding-inline: .5rem; */



  @include devices(md) {
    display: none !important;
    /* background-color: rebeccapurple; */

  }

}




.project__date{
  text-transform: uppercase;
  opacity: .8;
  font-size: .9rem;

}

.project__desc{
  padding-block: .5em;
}
.project__meta {
  font-size: 1rem;
  grid-column-end: span 3;
  grid-row: 2;
  margin-bottom: .5rem;
  line-height: 1.2;
  margin-top: .2rem;


  @include devices(md) {
    /* font-weight: 500; */
  }

}

.project__tools {
  grid-column: 1/span 3;
  grid-row: 3;

  /* font-size: 1.1rem; */
  display: flex;
  flex-wrap: wrap;
  /* no gap */
  text-transform: uppercase;
  margin-bottom: 2rem;
  line-height: 1;

  &>* {
    margin-right: 1em;
  }

  &>*:before {
    content: '#';
    opacity: .7;

  }

  @include devices(md) {
    /* font-weight: 500; */
  }
}



svg {
  width: 1em;
}

.project__image {

  /* display: none; */

  @include devices (sm) {
    /* max-width: 100%;*/
    grid-column: 4;
    grid-row: 1/span 4;



  }

}


.project__image {
  border-radius: .3rem;
  overflow: hidden;
  max-height: min(20rem, 70vh);
  margin-bottom: 1rem;
  height: fit-content;
  /* height: 10rem; */
  /* height: min(16rem, 50vh); */
  /* align-self: end; */
  background-color: var(--item-color, pink);

  &.mobile {
    grid-row: all;
    grid-row: 1/ span 5;

  }


  @include devices (sm) {

    /* border: .3rem solid red; */

    height: fit-content;


  }

}

.desktop {
  display: none;

  @include devices (md) {
    display: block;
  }
}

.mobile {
  display: block;

  @include devices (md) {
    display: none;
  }
}



/* lista de projects */
.projects {
  padding-top: 1rem;
  gap: 5rem;
  display: grid;
  padding-inline: var(--spacer);
  /* a section.gallery le quite el padding y se lo aplique a la lista y al heading */
  /* min-height: 200vh; */
  align-content: start;
  overflow: hidden; //aparecia un scrollbar .5s

}

@media (hover:hover){
  .projects{
  padding-top: 3rem;
  }
}

@media screen and (min-width: 768px) {

  .projects {
    padding-left: 2rem;
  }


  .project {
    grid-template-columns: repeat(8, 1fr);
    /* grid-template-columns: 1fr 1fr 1fr 1fr 2fr 2fr 2fr; */
    grid-template-rows: 1fr;
    grid-template-rows: auto;
    position: relative;
  }



  .project__title,
  .project__tools,
  .project__meta {
    grid-column: 1/span 5;
  }

  .project__title {
    grid-row: 1;
    align-self: unset;
    /* max-width: 25rem; */
    margin-bottom: .25rem;
    /* background-color: pink; */
    /* word-break: break-all; */
  }


  .project__meta {
    grid-row: unset;
    /* background-color: lightblue; */
  }

  .project__link {
    display: inline-block;
    grid-row: unset;
    text-align: right;
  }

  .project__image {
    grid-column: 6/span 8;

  }
}


.project * {
  /* background-color: transparent; */
}



/* BASE */

figure,
img {
  display: block;
}





/* FILTERS */


.filtros {
  display: flex;
  gap: 1em;
  flex-wrap: nowrap;
  /* flex-wrap: wrap; */
  overflow-x: auto;

  /* nooooooo añadirle paadin top o b para deslizar */


  /* margin-bottom: 3rem; causas margin colapsado + no lo necesita*/

  white-space: nowrap;
  padding: 1rem;
  max-width: 100%;

}

@media screen and (max-width: 767px) {
  .filtros {
    /* flex-wrap: wrap; */

    /* max-width: calc(100vw - var(--spacer) - var(--spacer)); */
    max-width: calc(100vw);

  }
}


@media (hover: hover) {
  .filtros {
    display: flex;
    gap: 1ch;
    flex-wrap: wrap;
    justify-content: center;
    /* solo en una pc estan wrapeados, no son slider */

    /* width: fit-content; para desktop */
    margin-inline: auto;
    overflow-x: hidden;

  }

}



.flex {
  display: flex;
  flex-wrap: wrap;
}



/* tags */








/* +++ https://codepen.io/jh3y/pen/QWZyxdg
*/





/* ´´´´´´ */


.btn--custom {
  --radius: .5rem;
  --text-padding: .5em 1.2em;
  /* --border: 1px; */
  --padding: 1px;


  /* mine */
  min-width: fit-content;
  /* muy imposrtante */
  --shadow-color: hsl(0 0% 100% / 0.5);


  --shadow-color: pink;

  white-space: nowrap;
  border-radius: var(--radius);
  overflow: hidden;
  border: 0;
  background: hsl(0 0% 90%);
  box-shadow: inset 0 -1px 0px 0px hsl(0 0% 0% / 0.5);

  font-size: 1.1rem;

  position: relative;
  display: grid;
  place-items: center;
  padding: var(--padding);
  transform: translate(calc(var(--active, 0) * -2px), calc(var(--active, 0) * 2px));
  transition: transform 0.1s;
  color: hsl(0 0% 20%);

  @include devices(md) {
    font-size: 1rem;
  }


}


@media (hover:hover) {
  .btn--custom {
    --text-padding: .3em 1em;

  }
}

.btn--custom:is(:hover, :focus-visible) {
  --hover: 1;
  /* es como decir, si, dale opacidad  */
}

.btn--custom:active {
  --active: 1;


}

.btn--custom:before {
  content: "";
  position: absolute;
  inset: 0;

  border-radius: var(--radius);
  /*   transition: background 0.2s; */
  /* background: hsl(0 0% 100% / calc(1 - var(--hover, 0) * 0.25)); */
  background: grey;
  background:
    conic-gradient(from calc(var(--rx, 0) * 180deg) at calc(var(--x, 0) * 100%) calc(var(--y, 0) * 100%), hsl(163, 76.9%, 45.9%), hsl(227.9, 96%, 60.6%), hsl(326, 93.5%, 63.7%), hsl(209.7, 89.5%, 55.3%), hsl(168.8, 96.9%, 50.2%));
  background:
    conic-gradient(from calc(var(--rx, 0) * 180deg) at calc(var(--x, 0) * 100%) calc(var(--y, 0) * 100%), var(--accent-1), var(--accent-2), var(--accent-3), var(--accent-2), var(--accent-1));

  filter: saturate(0.7);

  opacity: var(--hover, 0);
  transition: opacity 0.2s;

}

.btn--custom .backdrop {
  position: relative;
  width: 100%;
  height: 100%;
  background: hsl(0 0% 98% / 0.6);
  border-radius: calc(var(--radius) - var(--padding));
  display: block;
  grid-column: 1;
  grid-row: 1;
  backdrop-filter: blur(20px) brightness(1.5);
}

.text {
  padding: var(--text-padding);
  grid-row: 1;
  grid-column: 1;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: .5ch;
  white-space: nowrap;
  width: fit-content;

}

.btn--custom svg {
  width: 24px;
}


@media(prefers-color-scheme: dark) {
  .btn--custom {
    /* border-color: hsl(0 0% 20%); */
  }

  .btn--custom .backdrop {
    background: hsl(0 0% 10% / 0.4);
    /* backdrop-filter: blur(20px) brightness(1.2) saturate(1); */
  }

  .btn--custom:after {
    /* background: hsl(0 0% 10% / calc(1 - var(--hover, 0) * 0.25)); */
  }

  .btn--custom {
    color: hsl(0 0% 98%);
    background: hsl(0 0% 10%);
  }
}


/* mine */



.btn--custom.active {
  --shadow-color: coral;


  /* background: violet; */
  background: var(--accent-1);
  /* es el borde, solo que hay un padding de 1px */

  --btn-backdrop: var(--accent-5);

  & .text {
    color: var(--text-on-white, red);

  }

}



.btn--custom:hover {
  /* box-shadow: none; */
  color: var(--white) !important;
}

.btn--custom.active:hover {
  /* box-shadow: none; */

}


.btn--custom.active .backdrop {

  background: var(--btn-backdrop);
}
</style>

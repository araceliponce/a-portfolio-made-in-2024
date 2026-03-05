<template>
  <div id="gallery" :class="{ 'animated': animationClass }">
    <div class="filtros">
      <button :class="['filtro btn--custom', { active: 'Todo' === selectedCat }]" @click="filterItems('Todo')">
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


    <TransitionGroup name="list" tag="ul" class="projects contained pt-2" role="list">

      <!-- <ul class="portfolio contained pt-2" role="list"> -->
      <li v-for="(item, index) in filteredItems" :key="index" @mouseenter="playGif(index)">
        <article class="project" :id="item.id">

          <figure class="project-img-tags">
            <img :src="item.isGif ? item.gifSrc : item.imageSrc" :alt="item.alt" class="" loading="lazy" />

            <figcaption>
              <small class="pt-0 display-if-not-hoverable">Toca la imagen para reproducir gif</small>

              <!-- <a :href="item.url" target="_blank" rel="noopener noreferrer" class="no-tag">
                <span class="visually-hidden">Ver demo</span>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3h-7z" />
                </svg>
              </a> -->
            </figcaption>
          </figure>
          <div class="" :id=item.id>
            <!-- <p class="number--project">
              <span>0{{ item.id }}.</span>
            </p> -->
            <div class="project__content">

              <div class="flex">
                <!-- <h3 class="" translate="no">
                  {{ item.title }}
                  <span class="categories">
                    <span class="data cat" v-for="cat in item.cats" :key="cat"> [{{ cat }}]</span>
                  </span>
                </h3> -->
                <h3 class="" translate="no">

                  <a :href="item.url" target="_blank" rel="noopener noreferrer" class="">
                    <span>{{ item.title }}</span>

                    <div class="data">
                      <span class="" v-for="cat in item.cats" :key="cat"> [{{ cat }}]</span>
                    </div>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3h-7z" />
                    </svg>

                  </a>



                </h3>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, suscipit veritatis.</span>
              </div>
              <div class="">
                <div class="visually-hidden">Hecho con:</div>
                <ul class="flex tags">
                  <li v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</li>
                </ul>

              </div>


            </div>
            <!-- <a class="link" :href="item.url">
              <span>Ver demo</span>
            </a> -->
          </div>
        </article>

      </li>

      <!-- </ul> -->
    </TransitionGroup>
  </div>
</template>

<script setup>
//   <!--  material-symbols:arrow-circle-right -->



import { ref, onMounted } from 'vue';

import jsonData from './../assets/projects.json';



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

const selectedCat = ref('Todo');

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


.project{
  margin-bottom: 1rem;
  /* un espacio extra para separar de project de abajo */
}


/* title */

h3 {

font-size: clamp(1.3rem, 2vw + 10px, 4rem);
font-size: var(--fs-3);
/* font-size: clamp(1.3rem, 1vw + 10px, 3rem); */
text-transform: uppercase;

}


h3>a {
  /* display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto 1fr auto;
  align-content: end; */

  display: flex;
  flex-wrap: wrap;
  gap: .5em;
  align-items: end;

  padding-bottom: .1rem;
  /* border-bottom: .1rem solid currentColor; */
  margin-bottom: .5em;

  &:hover{
    color: var(--accent-1);
  }
}

h3>a>span:nth-child(1) {
  /* color: rebeccapurple; */
  flex-shrink: 0;
}



.data {
  flex: 1;
  font-size: .5em;
  opacity: .8;


  /* display: grid;
  align-content: end;
  grid-auto-flow: column;
  justify-content: space-between; */
  /* background: rebeccapurple; */

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: end;

  display: none;

  @include devices(md) {
    display: flex;
  }

}



a svg {
  /* width: 1rem; */
  /* height: 1rem; */
  width: 1em;
  height: 1em;
  margin-left: auto;
}




/* btns filtros */

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
























/* aaaaaaaaaaaaaaaaaaaaaaa */

figure,
img {
  display: block;
}

/* .project, */
figure {

  border-radius: .2rem;
  overflow: hidden;
  position: relative;
}

.project img {
  border-radius: .3rem;
}

.project {
  --spacer: 1rem;

  break-inside: avoid;
  
  line-height: 1;
}




figure {
  margin-inline: auto;
  width: 100%;

  /* border-radius: .5rem; */
  overflow: hidden;
  /* overflow: clip; */


  display: grid;
  justify-content: center;
  align-content: end;

  /* padding: 1rem; NOOOOO NO PADDING */

  border: 1rem solid var(--figure-bg);
  transition: all .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);


  aspect-ratio: 4/3;
}

figure img {
  margin: auto !important;
  max-height: 100%;
}







.project__content {

  width: 100%;
  display: grid;
  gap: 1ch;
  padding-top: 1em;
  padding-inline: .2em;
  /* inline pad */
}




.flex {
  display: flex;
  flex-wrap: wrap;
}



/* tags */


.tags{
  font-size: 90%;

}

.tag {
  position: relative;
}

.tag {
  padding-right: 2em;
}

.tag:after {
  /* content: '•'; */
  content: '|';
  position: absolute;
  right: 1em;
}

.tag:last-child:after {
  content: '';
}












ul {
  list-style: none;

}




/* 
 */




figure {
  background-color: var(--figure-bg, cornflowerblue);
}



.project[id="1"] {
  --figure-bg: rgb(77, 77, 245);
}

.project[id="2"] {
  --figure-bg: rgb(144, 245, 144);
  --figure-bg: rgb(113, 22, 40);
}

.project[id="3"] {
  --figure-bg: rgb(245, 210, 39);
  --figure-bg: rgb(28, 142, 99);
}

.project[id="4"] {
  --figure-bg: rgb(208, 178, 250);
  --figure-bg: rgb(136, 91, 241);

}

.project[id="5"] {
  --figure-bg: rgb(245, 66, 39);
  --figure-bg: #da3dac;
}

.project[id="6"] {
  --figure-bg: #df4e2d;
}




[href="#"] {
  pointer-events: none;
}

[href="#"] {
  --figure-bg: gray;
}

.projects {
  display: grid;
  --column-width: min(21rem, 100%);
  grid-template-columns: repeat(auto-fill, minmax(var(--column-width), 1fr));
  gap: 3rem;
  /* background-color: rebeccapurple; */


  margin-inline: auto;
  max-width: 100%; //sin esto, aunque sea autogrid lo demas no se wrapea

}



.projects>* {
  max-width: 23rem;
  margin-inline: auto;

  position: relative;
}


.project {
  border-radius: .5rem;
  /* background-color: red; */
  padding-bottom: .5rem;
}

.project:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: .15em;
  background-color: var(--figure-bg);
}














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

  font-family: sans-serif, system-ui;
  /* font-size: 1.25rem; */
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
    conic-gradient(from calc(var(--rx, 0) * 180deg) at calc(var(--x, 0) * 100%) calc(var(--y, 0) * 100%),
      hsl(10 90% 70%),
      hsl(140 80% 70%),
      hsl(320 80% 70%),
      hsl(210 80% 70%),
      hsl(10 80% 70%));
  background:
    conic-gradient(from calc(var(--rx, 0) * 180deg) at calc(var(--x, 0) * 100%) calc(var(--y, 0) * 100%), hsl(163, 76.9%, 45.9%), hsl(227.9, 96%, 60.6%), hsl(326, 93.5%, 63.7%), hsl(209.7, 89.5%, 55.3%), hsl(168.8, 96.9%, 50.2%));

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


  background: violet;
  /* es el borde, solo que hay un padding de 1px */

  color: rgb(74, 72, 72);

  --btn-backdrop: rgba(238, 130, 238, 0.2);

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

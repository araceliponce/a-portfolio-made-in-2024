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


      <ul v-auto-animate name="list" tag="ul" class="list works pt-2 pi" role="list">
        <li v-for="(item, index) in filteredItems" :key="index" @mouseenter="playGif(index)">
          <article class="work" :id="item.id" :data-id="item.id">

            <div class="project__image">
              <a class="" :href="item.imageMobileSrc">

                <img width="100" height="200" :src="item.imageMobileSrc" :alt="item.alt" :data-name="item.name">
              </a>

              <a class="" :href="item.imageDesktopSrc">
                <img width="690" height="590" :src="item.imageDesktopSrc" :alt="item.alt" loading="lazy" :data-name="item.name" />
              </a>

            </div>

            <ul class="flex tools">
              <li v-for="tag in item.tools" :key="tag" class="tag"><b>{{ tag }}</b></li>
            </ul>

            <div class="rows-cols">
              <div>
                <h3 translate="no" class="project__title">
                  <a :href="item.url" target="_blank" rel="noopener noreferrer">
                    <span class="visually-hidden">Ver el projecto: </span> 
                    {{ item.title }}
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3h-7z" />
                    </svg>
                  </a>
                </h3>
                <time datetime="" class="project__date">
                  {{ item.lastUpdate }}
                </time>
              </div>

              <div class="project__meta">
                <p class="project__desc">{{ item.desc }}</p>
              </div>
              <!-- <ul class="project__tools">
                <li v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</li>
              </ul> -->
            </div>



          </article>

        </li>

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




li {
  list-style: none;
}


.works {
  --column-width: min(45ch, 100%);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--column-width), 1fr));
  /* autofill para que no ocupen todo el espacio */
  /* grid-template-columns: repeat(auto-fill, minmax(var(--column-width), 1fr)); */
  gap: .5em;


  color: var(--for-text-2);
  line-height: 1.3;
  padding-bottom: 5rem;

  &>li{
    margin-bottom: 3rem;

  }
}

.work {
  max-width: 50ch;
  margin-inline: auto;
  /* outline: 0.1px solid currentColor; */
  border: 0.5px solid rgba(255, 255, 255, 0.3);

  border-radius: .3rem;
  padding: .7em 1em;
  background-color: var(--accent-5);
  /* background-color:  rgba(37, 59, 46, 0.237); */

  /* height: 100%; */

}





/* 

how to make a notetaking drawing app
and why not to do it


why?
i like drawing and want to learn

learn what?
using something else that supabase for google auth login
learn ejs
combine notetaking and drawing
learn better ui (for bigger hands)





*/







.project__image {
  display: grid;
  grid-auto-flow: column;
  gap: .3em;
  align-items: end;
  background-color: transparent;
  grid-template-columns: 25% 75%;
  justify-content: center;
  margin-inline: auto;

  &>a {
    display: block;
    border-radius: .3rem;
    overflow: hidden;
  padding: 0;
  }
  &>a:first-child{
    /* max-height: 90%; */
    /* overflow: hidden; */
  }
  &>a>img{
width: 100%;
  }
}

.tools {
  padding-block: 1em .3em;
  font-size: .8rem;
  display: flex;
  flex-wrap: wrap;

  line-height: 1;
  font-weight: 300;

  &>* {
    margin-right: 1em;
  }

  &>*:before {
    content: '#';

  }
}


.project__title {
  padding-top: .3em;
  color: var(--for-text); //como es enlace, para sobreescribri
  text-transform: uppercase;
  width: fit-content;

  &:hover,&:focus{
    color: var(--accent-1);
    animation: jello 1s ease-in 0s normal both;
  }

  &+*{
    font-size: .7rem;
    text-transform: uppercase;
  }

  &>a{
    word-break: keep-all;
    text-decoration: underline;
  display: grid;
  align-content: start;
  grid-auto-flow: column;
  gap: .2em;
  font-weight: 400;
  /* background-color: pink; */

  }
}

.project__title,.project__title+*{
  padding-left: .2em;
}

.project__desc{
  padding-top: .3em;
}

.project__image{
  /* scale: 1; */
  transition: all .2s ease;
  /* transform-origin: bottom; */
}







.rows-cols {
  display: grid;

  @include devices (md) {
    grid-auto-flow: column;
    gap: 1rem;
    grid-template-columns: 22% 78%;
    grid-template-columns: 13ch 1fr;
  }

  &>* {
    /* background-color: pink; */
  }
}




















svg {
  width: 1em;
}





/* BASE */

figure,
img {
  display: block;
}





/* FILTERS */


.filtros {
  display: flex;
  gap: .5em;
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
    gap: .5em;
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



.filters{
  font-weight: bold;
  /* color: var(--for-text-2); */
}



/* +++ https://codepen.io/jh3y/pen/QWZyxdg
*/






/* ´´´´´´ */


.btn--custom {
  --radius: .5rem;
  --text-padding: .5em .7em;
  --padding: 1px;

  font-size: 1rem;
  color: var(--for-text-2);

  /* mine */
  min-width: fit-content;
  /* muy imposrtante */
  --shadow-color: hsl(0 0% 100% / 0.5);


  --shadow-color: pink;

  white-space: nowrap;
  border-radius: var(--radius);
  overflow: hidden;
  border: 0;
  background: rgb(230, 230, 230);
  /* box-shadow: inset 0 -1px 0px 0px rgba(0, 0, 0, 0.5); */
  /* box-shadow:  0 1px 1px 1px var(--accent-7); */


  position: relative;
  display: grid;
  place-items: center;
  padding: var(--padding);
  transform: translate(calc(var(--active, 0) * -2px), calc(var(--active, 0) * 2px));
  transition: transform 0.1s;




}


@media (hover:hover) {
  .btn--custom {
    --text-padding: .4em .6em;
    font-size: .9rem;
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
  background: pink;
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
  width: 1em;
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

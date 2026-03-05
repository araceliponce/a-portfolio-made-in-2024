<template>
  <div class="info">
    <h1 class="info__line">
      <span>Araceli</span>
      <span>Ponce</span>
      <span>Sanga</span>
    </h1>
    <div class="info__line">
      <span class="break">Desarrolladora</span>
      <span>Digital</span>
    </div>
    <div class="info_line">
      i do
    </div>
    <div class="info__line small">
      <span>Maquetación web</span>
      <span>+</span>
      <span>Diseño UX/UI</span>
    </div>
    <div class="small">
      using figma + html + css + javascript + jquery + vue3 + php
      <small>and many more tools</small>
    </div>
    <div class="info__line break pt-3">
      <a data-splitting="true" href="mailto:a">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>
        <span aria-hidden="true">aponcesanga@gmail.com</span>
        <span class="visually-hidden">aponcesanga@gmail.com</span>
      </a>
    </div>
    <div class="info__line pb-5">
      <a href="" target="_blank" rel="noopener noreferrer">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>
        <span aria-hidden="true">Github</span>
        <span class="visually-hidden">Github</span>
      </a>
      <a href="" target="_blank" rel="noopener noreferrer">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>
        <span aria-hidden="true">Cv</span>
        <span class="visually-hidden">Cv</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap'); */
/* @import url(https://unpkg.com/open-props/open-props.min.css); */
/* @import url(https://unpkg.com/open-props/normalize.min.css); */

:root {
  --font-size: clamp(2.49rem, calc(2.03rem + 2.31vw), 3.82rem);
  --font-size: clamp(1.8rem, calc(2rem + 2.3vw), 4rem);
  --speed: 0.25s;
}



::selection {
  background: hsl(320 80% 50%);
}





a {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  text-transform: lowercase;
}

svg {
  width: calc(var(--font-size) * 0.8);
  aspect-ratio: 1;
}

.info {
  color: var(--text);
  text-transform: uppercase;
  font-size: var(--font-size);
  line-height: 1;
  font-weight: bold;


  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  letter-spacing: -1px;
}

.info a {
  color: var(--text);
  font-size: 70%;
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
</style>
<script setup>
import HelloWorld from './components/HelloWorld.vue';
import Colors from './components/Colors.vue';

import Charts from './components/Charts.vue';

import Hero from './components/Hero.vue';
import Info from './components/Info.vue';
import Gallery from './components/Gallery.vue';


import Grid from './components/Grid.vue';
import GridB from './components/GridB.vue';
import FallingWords from './components/FallingWords.vue'
import FallingAgain from './components/FallingAgain.vue';


// import GridTestA from './components/GridTestA.vue';
import GridTestB from './components/GridTestB.vue';
import GridTestC from './components/GridTestC.vue';
import GridTres from './components/GridTres.vue';



import { ref, onMounted } from 'vue';
import Tools from './components/Tools.vue';






</script>

<template>
  <div class="grain"></div>


  <!-- new
   -->

  <div class="layout">

    <!-- <div class="extra">



    </div> -->



    <!-- <header class="header">
      <nav class="nav">
        <router-link class="tr-link" :to="'/'">works</router-link>
        <router-link class="tr-link" :to="'/about'">about</router-link>
      </nav>
      <div class="inline-block">
        <div class="visitors" data-visitors="+10">
          <div class="visitor"></div>
          <div class="visitor"></div>
          <div class="visitor"></div>
          <div class="visitor"></div>
          <div class="visitor"></div>
        </div>
      </div>


    </header> -->
    <div class="main-grid">


      <aside class="aside">
        <div class="abc">
          <!-- <p class="">
            available or projects, send email to <a href="">aponcesanga@gmail.com</a>
          </p> -->
          <nav class="nav">
            <router-link class="tr-link" :to="'/'">works</router-link>
            <router-link class="tr-link" :to="'/about'">about</router-link>
          </nav>

          <Colors />

          <!-- <Charts /> -->

        </div>

      </aside>
      <div class="main ">

        <header class="header">
          <nav class="nav">
            <router-link class="tr-link" :to="'/'">works</router-link>
            <router-link class="tr-link" :to="'/about'">about</router-link>
          </nav>
          <div class="inline-block">
            <div class="visitors" data-visitors="+10">
              <div class="visitor"></div>
              <div class="visitor"></div>
              <div class="visitor"></div>
              <div class="visitor"></div>
              <div class="visitor"></div>
            </div>
          </div>


        </header>
        <div class="hero ">

          <div class="contained">

            <!-- <Info /> -->

          </div>
        </div>


        <HelloWorld msg="Desarrollado por Araceli Ponce Sanga" />

        <!-- aqui router -->
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <!-- <transition name="scale-slide"> -->
            <Component :is="Component" />
          </transition>
        </router-view>
        <!-- fin router -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
/* https://www.npmjs.com/package/simple-icons */



.main-grid {
  display: grid;
  // grid-template-columns: 20ch 1fr;

  @include devices(md) {
    grid-template-columns: 20ch 1fr;
  }

}



.extra {
  // background-color: var(--accent-1);
}

.aside {
  // background-color: var(--accent-1);
  min-height: fit-content;



  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: pink;


  @include devices(md) {
    position: relative !important;
    // width: 10rem;
    width: 100%;
    background-color: yellow;

  }

}


#colors {
  display: grid;
}



.aside nav {
  display: none;

  @include devices(md) {
    display: grid;
  }
}




.extra {
  // grid-area: extra;
}

.extra {

  min-width: calc(var(--square-size) * 5);
  // el min-width simepre debe ser al menos para colors
  margin-inline: auto;


  @include devices(xl) {
    display: grid;
    width: fit-content; //importante
  }
}


// ademas de ser un item es un contenedor grid
.extra {
  display: grid;
  padding-top: var(--spacer);


  // para justificar a su hijo #colors
  justify-content: center;
  justify-content: start;

  @include devices(sm) {
    // justify-content: start;
    // padding-bottom: var(--spacer);

  }

}

@media screen and (min-width:768px) {




  .abc {
    position: sticky;
    top: 12rem;
    top: 50vh;
    top: 0;
    // background-color: blue;

    padding-block: var(--spacer);
    padding-inline: var(--spacer);
    // font-size: 1.5rem;
  }

  .abc>* {
    display: grid;
  }





}



.header {
  // no debe usar bgporque se nota que se corta antes
  // grid-area: header;


  padding-block: 1rem;



  display: flex;
  // flex-wrap: wrap;
  align-items: center;

  justify-content: space-between;
  // background-color: red;
  width: 100% !important;

  padding-left: var(--spacer);
  padding-right: var(--spacer);

  // padding-right: calc( var(--spacer) + ch);

  height: fit-content;
  margin-block: auto;
  gap: 1em;
  font-size: $visitor-size /2;


  // ++easiest sticky
  /*  position: sticky;
  top: 0;
  z-index: 9;
  left: 0;
  width: 100%; */



}



.main-grid>* {
  // position: relative;

  max-width: 100%;
  overflow: clip;
  // outline: 1px solid red;
  width: fit-content;

}

.extra,
// .header,
.aside,
.main {

  // width: auto;
  width: unset;
}








/* ++bg */

@keyframes grain {
  0% {
    transform: translate(20%, -15%);
  }

  10% {
    transform: translate(-20%, -15%);
  }

  20% {
    transform: translate(20%, -5%);
  }

  30% {
    transform: translate(-20%, -5%);
  }

  40% {
    transform: translate(20%, 5%);
  }

  50% {
    transform: translate(-20%, 5%);
  }

  60% {
    transform: translate(20%, 15%);
  }

  70% {
    transform: translate(-20%, 15%);
  }

  80% {
    transform: translate(20%, 5%);
  }

  90% {
    transform: translate(-20%, 5%);
  }

  100% {
    transform: translate(20%, -5%);
  }
}

* {
  /* outline: 1px solid red; */
}

.grain {

  position: fixed;
  inset: 0;


  /* background-color: var(--body-bg); */
  /* box-shadow: 0 50vh 0 0 var(--body-bg); */

  z-index: 0;


}

.grain:after {
  content: '';
  animation: grain 7s steps(10) infinite;
  /* background-image: url('assets/grain.png'); */
  background-image: url('/grain.png');
  background-repeat: repeat;
  height: 300%;
  left: -100%;
  opacity: .04;
  pointer-events: none;
  position: fixed;
  top: -100%;
  width: 300%;
  will-change: transform;
}

section,
footer {
  position: relative;
}



/* header {

  position: fixed;
  left: 0;
  right: 0;
  text-transform: uppercase;

  transform: translateY(0%);
  transition: transform 0.3s ease-in-out;


  background-color: rgba(54, 53, 54, 0.274);
  color: var(--text-2);
  filter: brigtness(.5);
  backdrop-filter: blur(1rem);

  z-index: 9;


}

header a,
header button {
  display: grid;
  max-height: 2em;
  place-content: center;
margin-block: 1rem;
font-size: 1rem;
font-weight: bold;
color: violet;

}

*/


header.hidden {
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;
  /* Add a smooth transition effect */
}

header .flex {
  align-items: center;
  padding: 0;
}











section {
  /* min-height: 100svh; */
}


svg {
  width: 1rem;
}

footer {
  min-height: 100vh;
  /* background-color: lightgreen; */
}
</style>

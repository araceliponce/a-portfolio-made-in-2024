<template>
  <div class="tall contained">
    <div class="outer-div" ref="outerDiv">
      <div class="text-wrapper" ref="textWrapper">
        <span class="visually-hidden">portafolio de araceli ponce sanga</span>
        <!-- <div>
          Araceli * Araceli * Araceli *

        </div> -->
        <span aria-hidden="true">
          Araceli * Desarrolladora Digital *
        </span>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const textWrapper = ref(null);
const outerDiv = ref(null);
let lastMouseX = ref(0);

onMounted(() => {
  // Check for hover media feature
  const mediaQuery = window.matchMedia('(hover:hover)');

  // Add mousemove event listener only if hover is supported
  if (mediaQuery.matches) {
    outerDiv.value.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX - outerDiv.value.getBoundingClientRect().left;
      const center = outerDiv.value.offsetWidth / 2;
      const direction = mouseX > center ? 1 : -1;
      console.log(direction)

      // Move the text in the direction of mouse movement
      // textWrapper.value.style.transform = `translateX(${direction * -5}ch)`;
      textWrapper.value.style.transform = `translateX(${direction * 15}rem)`;
    });

    outerDiv.value.addEventListener('mouseleave', () => {
      // Reset the text position when the mouse leaves the outer div
      textWrapper.value.style.transform = 'translateX(0)';
      // lastMouseX.value = 0;
    });
  }
});

// Calculate the direction based on the difference and center
// function direction(difference, center) {
//   return difference > center ? 1 : difference < -center ? -1 : 0;
// }
</script>

<style scoped>
/* Define the styles for the outer div */
.contained {
  /* max-width: 500px; */
  /* outline: 1px solid red; */

  opacity: 0;
}


@media (hover:hover) {
  .can-hover .contained {
    opacity: 1;
  }

}


.tall {
  /* min-height: 30vh; */
  display: flex;
  align-items: center;
  max-width: 100%;
  overflow: hidden;
}

.outer-div {
  width: 100%;

  height: 2em;
  overflow: hidden;
  position: relative;

  text-transform: uppercase;
  /* font-size: var(--fs-3); */
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  letter-spacing: -.05em;
  line-height: 1;

}

.can-hover .outer-div {
  white-space: nowrap;
  /* background-color: red; */

}

@media screen and (max-width: 767px) {
  .can-hover .outer-div {
    white-space: wrap;
    /* background-color: pink; */
    /* font-size: 10cqw; */
  }
}

.text-wrapper {
  position: absolute;
  transition: transform 1s ease;

  /* width: 100%; */
  /* transform: translateX(-50%); */
  width: 30rem;
  display: flex;
}
</style>

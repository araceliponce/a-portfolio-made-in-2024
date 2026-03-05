<script setup>
</script>
<template>
  <section class="container">
    <h1>Slide text on hover animation</h1>
    <button data-hover="hover ne!">
      <div>Hover me!</div>
    </button>
  </section>
</template>
<style scoped>
/* from https://codepen.io/madshaakansson/pen/ExZPJX */
section.container {
  min-width: 500px;
  margin: 10% auto;
  text-align: center;
}

a:hover {
  border-bottom: 1px solid #111;
}

h1 {
  /* font-size: 2em; */
  padding: 20px 0;
}

p {
  font-size: 0.75em;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 20px 0;
}

button:hover {
  cursor: pointer;
}

button {
  background: transparent;
  outline: none;
  position: relative;
  border: 2px solid #111;
  padding: 15px 50px;
  overflow: hidden;
}

/*button:before (attr data-hover)*/
button:hover:before {
  opacity: 1;
  transform: translate(0, 0);
}

button:before {
  content: attr(data-hover);
  position: absolute;
  top: 1.1em;
  left: 0;
  width: 100%;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 800;
  font-size: 0.8em;
  opacity: 0;
  transform: translate(-100%, 0);
  transition: all 0.3s ease-in-out;
  background: coral;
  inset: 0;
  display: grid;
  place-content: center;
}

/*button div (button text before hover)*/
button:hover div {
  opacity: 0;
  transform: translate(100%, 0);
}

button div {
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 800;
  font-size: 0.8em;
  transition: all 0.3s ease-in-out;
}
</style>
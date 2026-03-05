<template>
  <div>
    <span class="letter">A</span>
    <span class="letter">c</span>
    <span class="letter">e</span>
    <span class="letter">r</span>
    <span class="letter">c</span>
    <span class="letter">a</span>
    <span class="space"> </span>
    <em>
      <span class="letter">d</span>
      <span class="letter">e</span>
    </em>
    <span class="space"> </span>
    <span class="letter">m</span>
    <span class="letter">í</span>
    <span class="space"></span>
    <strong>
      <span class="letter">:</span>
      <span class="letter">)</span>
    </strong>
  </div>
</template>

<style scoped>
/* fromm https://codepen.io/mikallwilsonn/pen/zbedYr */


/* snapseed clone https://codepen.io/mikallwilsonn/pen/rYrWad photo pfilters, press and hold to see changes */
div {
  font-size: 7rem;
  /* padding: 50px; */
  padding-inline: var(--spacer);
  line-height: 1;
}

span {
  display: inline-block;
  padding: 0;
  /* padding: 1rem; */
  /* outline: 1px solid red; */
  /* margin: 0 -20px 0 -4px; */
  user-select: none;
  transition: 0.3s;
}

span.space {
  padding: 0 5px;
  margin: 0 1px;
}

span.letter:nth-child(odd) {

  /* transform: rotate(5deg); */

}

span.letter:nth-child(even) {

  /* transform: rotate(16deg); */
}

.can-hover .letter:nth-child(even):hover {

  transform: rotate(90deg);

}

.can-hover .letter:nth-child(even):hover+span {
  transform: rotate(96deg);

}

.can-hover .letter:nth-child(odd):hover {
  transform: rotate(-90deg);
}

.can-hover .letter:nth-child(odd):hover+span {
  transform: rotate(-96deg);
}
</style>
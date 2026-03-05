<template>
  
  <div class="works pi">

  <div class="container">
    <iframe height="420" width="520px" style="" scrolling="no" title="Easiest math quiz with timer" src="https://codepen.io/araceliponce/embed/dywxZPb?default-tab=" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/araceliponce/pen/dywxZPb">
  Easiest math quiz with timer</a> by araceliponce (<a href="https://codepen.io/araceliponce">@araceliponce</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
   </div>
  <div class="container"> 
    <iframe height="420" width="500px" style="" scrolling="no" title="Easiest math quiz with timer" src="https://codepen.io/araceliponce/embed/dywxZPb?default-tab=" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/araceliponce/pen/dywxZPb">
  Easiest math quiz with timer</a> by araceliponce (<a href="https://codepen.io/araceliponce">@araceliponce</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
  </div>


</div>
</template>

<style scoped lang="scss"> 
.works {
  --column-width: min(550px, 100%);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--column-width), 1fr));
  /* autofill para que no ocupen todo el espacio */
  /* grid-template-columns: repeat(auto-fill, minmax(var(--column-width), 1fr)); */
  gap: 0em;


  color: var(--for-text-2);
  line-height: 1.3;
  padding-bottom: 5rem;
  /* background-color: pink; */


  display: flex;
  gap: 3em;
  flex-wrap: wrap;
}

.works>*{
  /* max-width: 12rem; */
}



/* https://www.w3schools.com/howto/howto_css_responsive_iframes.asp */
.container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 90%; /* 3/4 */

  @include devices (md){
    width: 45%;
    padding-top: 40%; 
  }
}
.container>*{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

</style>

<script setup>
</script>
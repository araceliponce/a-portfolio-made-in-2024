<template >


    <!-- <button @click="toggleScroller" id="toggleScroller">sss</button> -->

  <div id="colors" class="media-scroller media-scroller--with-groups snaps-inline custom-scrollbar" :class="{ hidden: !showScroller }">

    <div class="media-group spring">
      <div class="media-element">
        <div class="color"></div>
      </div>
      <div class="media-element">
        <div class="color"></div>
      </div>
      <div class="media-element">
        <div class="color"></div>
      </div>
      <div class="media-element">
        <div class="color"></div>
      </div>
      <div class="media-element">
        <div class="color"></div>
      </div>
    </div>
    <div class="media-group summer">
      <div class="media-element">
        <div class="color"></div>
      </div>
      <div class="media-element">
        <div class="color"></div>
      </div>
      <div class="media-element">
        <div class="color"></div>
      </div>
      <div class="media-element">
        <div class="color"></div>
      </div>
      <div class="media-element">
        <div class="color"></div>
      </div>
    </div>
    <div class="media-group fall">
      <div class="media-element">
        <div class="color"></div>
      </div>
      <div class="media-element">
        <div class="color"></div>
      </div>
      <div class="media-element">
        <div class="color"></div>
      </div>
      <div class="media-element">
        <div class="color"></div>
      </div>
      <div class="media-element">
        <div class="color"></div>
      </div>
    </div>
    <div class="media-group winter">
      <div class="media-element">
        <div class="color"></div>
      </div>
      <div class="media-element">
        <div class="color"></div>
      </div>
      <div class="media-element">
        <div class="color"></div>
      </div>
      <div class="media-element">
        <div class="color"></div>
      </div>
      <div class="media-element">
        <div class="color"></div>
      </div>
    </div>
  </div>

  <!-- </div> -->



  <!-- </div> -->
</template>



<style scoped lang="scss"> 


#toggleScroller{
  position: fixed;
  top: var(--spacer);
  width: 3rem;
  height: 3rem;
  background: pink;
  display: none;
  border-radius: 100vh;

  @include devices(md){
    display: grid;
  }
}



#colors{
  @include devices(sm){
    /* border-bottom: 1px solid white; */
  }
}

#colors>*>*:nth-child(1) {
  --color: var(--accent-1);
}

#colors>*>*:nth-child(2) {
  --color: var(--accent-2);
}

#colors>*>*:nth-child(3) {
  --color: var(--accent-3);
}

#colors>*>*:nth-child(4) {
  --color: var(--accent-4);
  filter: sepia(.6)
}

#colors>*>*:nth-child(5) {
  --color: var(--accent-5);
}


#colors{
  transform: translateY(0%);
  transition: transform 0.2s ease-in-out;
&.hidden{
  transform: translateY(-100%);
  transition: transform 0.2s ease-in-out;
  /* Add a smooth transition effect */
}

}




</style>


<script setup>
import { ref } from "vue";

const showScroller = ref(true);

const toggleScroller = () => {
  showScroller.value = !showScroller.value; // Toggle the container's visibility
};
</script>





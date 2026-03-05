<template>
  <div class="grid">
    <mm id="example-grid" :options="muuriOptions">
      <!--item-sm id="item-sm1" width="30%" height="150px"-->
      <item-sm class="item" :id="'item-sm-' + index" v-for="index in itemsInitNumber" :key="index" width="30%" height="150px">
        <p>Small item {{ index }}</p>
      </item-sm>
    </mm>
  </div>
</template>

<!-- <script>
// import { ItemSm } from "vue-muuri";
import ItemSm from "vue-muuri/src/components/items/ItemSm.vue";
export default {
  name: "Grid",
  data() {
    return {
      options: {
        items: ".item",
        dragEnabled: true
      },
      itemsInitNumber: 12
    };
  },
  components: {
    ItemSm
  }
};
</script> -->

<script setup>
// import { MuuriGrid } from "vue-muuri";
import mm from './MuuriGridB.vue'
import ItemSm from "vue-muuri/src/components/items/ItemSm.vue";

const itemsInitNumber = 12


const muuriOptions = {
  items: ".item", // Target the class of the grid items
  dragEnabled: true,

};
</script>

<style >
.grid {
  width: 100%;
  position: relative;
  margin: 0 auto;
  display: flex;


}

.item {
  background-color: #007bff !important;
}
</style>
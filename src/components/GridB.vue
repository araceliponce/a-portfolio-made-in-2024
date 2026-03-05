<!-- 

  https://github.com/gridstack/gridstack.js/

// Import Gridstack library
// import GridStack from 'gridstack';
// import 'gridstack/dist/gridstack.css';
// import 'gridstack/dist/gridstack.css'; // Import Gridstack CSS
// import GridStack from '../../node_modules/gridstack/dist/gridstack-all'; // Import Gridstack library
 -->






<template>
  <button class="small" @click="addNewWidget">Add New Widget</button>
  <div class="grid-stack ">
    <div v-for="(w, indexs) in items" class="grid-stack-item" :class="w.customClass" :gs-x="w.x" :gs-y="w.y" :gs-w="w.w" :gs-h="w.h" :gs-id="w.id" :id="w.id" :key="w.id">
      <div class="grid-stack-item-content">
        <button class="small" @click="remove(w)">remove</button>
        {{ w.customText }}
      </div>
    </div>
  </div>
  <!-- <div class="grid-stack ">

    <div v-for="(w, indexs) in items" class="grid-stack-item" :gs-x="w.x" :gs-y="w.y" :gs-w="w.w" :gs-h="w.h" :gs-id="w.id" :id="w.id" :key="w.id">
      <div class="grid-stack-item-content">
        <button class="small" @click="remove(w)" aria-label="Quitar">x</button>
        <div :class="w.customClass">
          {{ w.customText }}
        </div>
      </div>
    </div>
  </div> -->
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';


const customTextArray = ['Custom Text 1', 'Custom Text 2', 'Custom Text 3'];
const customClassArray = ['class-1', 'class-2', 'class-3'];


// let count = ref(0);
let count = ref(3);
let info = ref('');
let gridFloat = ref(false);
let color = ref('black');
let gridInfo = ref('');
let grid = null;
let items = ref([]);

// Initialize items with three grid items
for (let i = 0; i < count.value; i++) {
  // items.value.push({ x: 0, y: 0, w: 2, h: 2, id: 'w_' + i });
  // items.value.push({ x: 0, y: 0, w: 2, h: 2, id: 'w_' + i, customText: customTextArray[i], customClass: customClassArray[i] });
  items.value.push({ x: 0, y: 0, w: 2, h: 2, id: 'w_' + i, customText: customTextArray[i] });
}





onMounted(() => {
  grid = GridStack.init({
    // float: false,
    cellHeight: '70px',
    minRow: 2,

    // +++++
    float: true,
    disableOneColumnMode: true, // will manually do 1 column
    column: 7,
    alwaysShowResizeHandle: 'mobile' // true if we're on mobile devices


  });

  grid.on('dragstop', (event, element) => {
    const node = element.gridstackNode;
    info.value = `You just dragged node #${node.id} to ${node.x},${node.y} – good job!`;
  });

  grid.on('change', onChange);
});

// function changeFloat() {
//   gridFloat.value = !gridFloat.value;
//   grid.float(gridFloat.value);
// }

function onChange(event, changeItems) {
  updateInfo();
  changeItems.forEach(item => {
    const widget = items.value.find(w => w.id == item.id);
    if (!widget) {
      alert('Widget not found: ' + item.id);
      return;
    }

    console.log(item.y, 'es item y')

    // widget.x = item.x;
    // widget.y = item.y;
    // widget.w = item.w;
    // widget.h = item.h;
    widget.x = 0;
    widget.y = 0;
    widget.w = 2;
    widget.h = 2;

    // Check if customTextArray and customClassArray contain values for this item.id
    if (customTextArray.hasOwnProperty(item.id)) {
      widget.customText = customTextArray[item.id];
    }

    console.log({ widget })



  });
}


function remove(widget) {
  const index = items.value.findIndex(w => w.id == widget.id);
  items.value.splice(index, 1);
  const selector = '#' + widget.id;
  grid.removeWidget(selector, false);
  updateInfo();
}

function updateInfo() {
  color.value = grid.engine.nodes.length == items.value.length ? 'black' : 'red';
  gridInfo.value = `Grid engine: ${grid.engine.nodes.length}, widgets: ${items.value.length}`;
}


//add children

// Function to add a new widget with custom text and class
/* function addNewWidget() {
  const id = count.value;
  const node = {
    x: 0,
    y: 0,
    w: 2,
    h: 2,
    id: 'w_' + id,
    customText: customTextArray[id - 1], // Use id as index to get custom text
    customClass: customClassArray[id - 1], // Use id as index to get custom class
  };

  items.value.push(node);
  count.value++;
  nextTick(() => {
    grid.makeWidget(node.id);
    updateInfo();
  });
} */
function addNewWidget() {
  const id = count.value;
  const index = id % customTextArray.length; // Calculate the index based on the current count
  const node = {
    x: 0,
    y: 0,
    w: 2,
    h: 2,
    id: 'w_' + id,
    customText: customTextArray[index], // Use index to get custom text
    // customClass: customClassArray[index], // Use index to get custom class
  };

  items.value.push(node);
  count.value++;
  nextTick(() => {
    grid.makeWidget(node.id);
    updateInfo();
  });
}

let layout = 'moveScale';
function resizeGrid() {
  let width = document.body.clientWidth;
  if (width < 700) {
    grid.column(1, layout).cellHeight('100vw');
    // grid.column(1).cellHeight('100vw');
    // text.innerHTML = 1;
  } else if (width < 850) {
    grid.column(3, layout).cellHeight('33.3333vw');
    // grid.column(3).cellHeight('33.3333vw');
    // text.innerHTML = 3;
  } else if (width < 950) {
    grid.column(6, layout).cellHeight('16.6666vw');
    // grid.column(6).cellHeight('16.6666vw');
    // text.innerHTML = 6;
  } else if (width < 1100) {
    grid.column(8, layout).cellHeight('12.25vw');
    // grid.column(8).cellHeight('12.25vw');
    // text.innerHTML = 8;
  } else {
    grid.column(12, layout).cellHeight('8.3333vw');
    // grid.column(12).cellHeight('8.3333vw');
    // text.innerHTML = 12;
  }
};

window.addEventListener('resize', function () { resizeGrid() });

</script>

<style scoped>
.small {
  font-size: .8rem;
}

.grid-stack {
  display: grid;

  --column-width: min(14ch, 100%);
  display: grid !important;
  /* grid-template-columns: repeat(auto-fit, minmax(var(--column-width), 1fr)); */
  gap: var(--gap, 1rem);

}


/* estos obtinen las clases 1 23 456 */
.grid-stack-item {
  background-color: #3498db;
  color: #ffffff;
  text-align: center;
  /* padding: 1rem; nooooo no paading*/
  border: 1px solid #dddddd;
  cursor: grab;
  user-select: none;

  /* position: relative; le quito para que el top  no le afecte */

}

.grid-stack-item button {
  position: absolute;
  top: var(--t, 0);
  right: var(--r, 0);
}

.grid-stack-item-content {
  background-color: transparent;
  height: 100%;
  /* importante que tenga el maximo height */

  padding-inline: var(--pi, .5rem);

  /* ahora sus hijos son el btn y el div clase-1 2 34 5  */
  display: grid;
  place-content: center;
}



.grid-center {
  display: grid;
  place-content: center;
  outline: 1px solid white;
  background-color: black;
}

.class-1 {
  background-color: pink;
  width: fit-content;


  color: white;
  border: 1px solid #ffffff;
  border-radius: 50px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: absolute;
  top: 15%;
  left: 20%;
  transform: translate(-15%, -20%);
  letter-spacing: 0.01em;
}

.grid-stack-item.ui-resizable-autohide {
  outline: 1px solid red;
}



.class-2 .grid-stack-item-content {
  border-radius: 100vh;
  width: fit-content;
  margin: auto;
}


/* .class-3 .grid-stack-item-content { */
.class-3 {
  background-color: lightcoral;
  border-radius: 100vh;
  --t: 1rem;
  --r: 1rem;
  --pi: 2rem;
  padding-inline: var(--pi);
  padding-right: calc(var(--pi) + var(--r) + var(--r));
}

.class-3 button {
  border-radius: 100vh;
  display: grid;
  width: 2em;
  place-content: center;
}
</style>

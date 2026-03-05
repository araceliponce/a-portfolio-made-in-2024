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
    <div v-for="(w, indexs) in items" class="grid-stack-item" :gs-x="w.x" :gs-y="w.y" :gs-w="w.w" :gs-h="w.h" :gs-id="w.id" :id="w.id" :key="w.id">
      <div class="grid-stack-item-content">
        <button class="small" @click="remove(w)">remove</button>
        <!-- {{ w.id }} -->
        {{ w.customText }}

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';

// let count = ref(0);
let count = ref(3);
let info = ref('');
let gridFloat = ref(false);
let color = ref('black');
let gridInfo = ref('');
let grid = null;
let items = ref([]);

// ++++++++++++
const gridInitialized = ref(false);
let layout = 'moveScale';
const customTextArray = ['Custom Text 1', 'Custom Text 2', 'Custom Text 3'];


// Initialize items with three grid items
// for (let i = 0; i < count.value; i++) {
//   items.value.push({ x: 0, y: 0, w: 2, h: 1, id: 'w_' + i });
// }

for (let i = 0; i < count.value; i++) {
  // items.value.push({ x: 0, y: 0, w: 2, h: 2, id: 'w_' + i });
  // items.value.push({ x: 0, y: 0, w: 2, h: 2, id: 'w_' + i, customText: customTextArray[i], customClass: customClassArray[i] });
  items.value.push({ x: 0, y: 0, w: 2, h: 1, id: 'w_' + i, customText: customTextArray[i] });
}


onMounted(() => {
  grid = GridStack.init({
    // float: false,
    // cellHeight: '70px',
    // minRow: 2,

    // from https://github.com/gridstack/gridstack.js/blob/master/demo/responsive.html 
    cellHeight: 'initial', // start square but will set to % of window width later
    // animate: false, // show immediate (animate: true is nice for user dragging though)
    animate: true,
    // disableOneColumnMode: true, // will manually do 1 column
    float: true,
    // column: 5,
    // height: 5,

    // margin: 12,
    // cellHeight: 100,
    cellHeight: 50, //un height incial sin necesidad de hacer resize

    // disableOneColumnMode: true,
    acceptWidgets: true,
    minRow: 1,
  });

  resizeGrid();
  gridInitialized.value = true;
  window.addEventListener('resize', resizeGrid);


  grid.on('dragstop', (event, element) => {
    const node = element.gridstackNode;
    info.value = `You just dragged node #${node.id} to ${node.x},${node.y} – good job!`;

    console.log(info.value)
  });

  grid.on('change', onChange);
});

// function changeFloat() {
//   gridFloat.value = !gridFloat.value;
//   grid.float(gridFloat.value);
// }
// resizeGrid();
// window.addEventListener('resize', function () { resizeGrid() });
function oldresizeGrid() {
  console.log(grid, 'es grid')
  let width = document.body.clientWidth;
  if (width < 700) {
    grid.column(1, layout).cellHeight('10vh');
    // text.innerHTML = 1;
  } else if (width < 850) {
    grid.column(3, layout).cellHeight('5rem');
    // text.innerHTML = 3;
  } else if (width < 950) {
    grid.column(6, layout).cellHeight('6rem');
    // text.innerHTML = 6;
  } else if (width < 1100) {
    grid.column(8, layout).cellHeight('6rem');
    // text.innerHTML = 8;
  } else {
    grid.column(12, layout).cellHeight('6rem');
    // text.innerHTML = 12;
  }

};


const resizeGrid = () => {
  if (gridInitialized.value && grid) {
    // console.log(grid) verifica que existe
    grid.enableMove(true);

    // como a todos les puse h-2 pues tienen el doble de height, acepta vh , rem, solo el numero (ejem;20 = 20px)
    const width = document.body.clientWidth;
    if (width < 700) {
      grid.column(1, layout).cellHeight('10vh');
      grid.engine.column = 7;
    } else if (width < 850) {
      grid.column(3, layout).cellHeight('20');
      grid.engine.column = 7;

    } else if (width < 950) {
      grid.column(6, layout).cellHeight('6rem');
      grid.engine.column = 7;

    } else if (width < 1100) {
      grid.column(8, layout).cellHeight('6rem');
      grid.engine.column = 7;

    } else {
      grid.column(12, layout).cellHeight('6rem');
      grid.engine.column = 7;

    }

    console.log(grid.el)
    console.log(grid.engine.column)
  }
};



function old_onChange(event, changeItems) {
  updateInfo();
  changeItems.forEach(item => {
    const widget = items.value.find(w => w.id == item.id);
    if (!widget) {
      alert('Widget not found: ' + item.id);
      return;
    }
    widget.x = item.x;
    widget.y = item.y;
    widget.w = item.w;
    widget.h = item.h;
  });
}



function onChange(event, changeItems) {
  updateInfo();
  changeItems.forEach(item => {
    const widget = items.value.find(w => w.id == item.id);
    if (!widget) {
      alert('Widget not found: ' + item.id);
      return;
    }

    console.log(item.y, 'es item y')

    widget.x = item.x;
    widget.y = item.y;
    widget.w = item.w;
    widget.h = item.h;


    // Check if customTextArray and customClassArray contain values for this item.id
    if (customTextArray.hasOwnProperty(item.id)) {
      widget.customText = customTextArray[item.id];
    }

  });
}


function addNewWidget2() {
  const node = items.value[count.value] || { x: 0, y: 0, w: 2, h: 2 };
  node.id = 'w_' + count.value++;
  items.value.push(node);
  nextTick(() => {
    grid.makeWidget(node.id);
    updateInfo();
  });
}

function removeLastWidget() {
  if (count.value == 0) return;
  const id = 'w_' + (count.value - 1);
  const index = items.value.findIndex(w => w.id == id);
  if (index < 0) return;
  const removed = items.value[index];
  remove(removed);
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
// function addNewWidget() {
//   const node = items[count.value] || { x: 0, y: 0, w: 2, h: 1 };
//   node.id = 'w_' + (count.value++);
//   items.value.push(node);
//   nextTick(() => {
//     grid.makeWidget(node.id);
//     updateInfo();
//   });
// }

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



</script>

<style scoped>
.small {
  font-size: .8rem;
}

.grid-stack {
  background-color: pink;
  display: grid;

  --column-width: min(14ch, 100%);
  display: grid !important;
  grid-template-columns: repeat(auto-fit, minmax(var(--column-width), 1fr));
  /* grid-template-columns: repeat(auto-fill, minmax(var(--column-width), 1fr)); */
  gap: var(--gap, 1rem);

  min-height: 300px;

}


.grid-stack-item {
  background-color: #3498db;
  color: #ffffff;
  text-align: center;
  padding: 1rem;
  border: 1px solid #dddddd;
  /* max-width: min(50vw, 10rem); */
  cursor: grab;
  user-select: none;
}

.grid-stack-item:nth-child(2) {
  /* grid-column: 3; */
}

.grid-stack-item-content {
  /* background-color: pink; */
  height: 100%;
}
</style>

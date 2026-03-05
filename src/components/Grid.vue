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
        {{ w.id }}
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
// let layout = 'moveScale';

// Initialize items with N grid items , (3)
for (let i = 0; i < count.value; i++) {
  items.value.push({ x: 0, y: 0, w: 2, h: 2, id: 'w_' + i, customText: customTextArray[i] });
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
    // float: true,
    // disableOneColumnMode: true,
    acceptWidgets: true,
    minRow: 1,
  });
  resizeGrid()

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
// resizeGrid();
window.addEventListener('resize', function () { resizeGrid() });
function resizeGrid() {
  let width = document.body.clientWidth;
  if (width < 700) {
    grid.column(1, layout).cellHeight('5rem');
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


  // let numberOfRows = $('#grid1').data('gs-height');
  // let minHeight = ((numberOfRows * options.cellHeight + ((numberOfRows - 1) * options.verticalMargin)));
  // $('#grid1').css({ 'min-height': newHeight });

};



function onChange(event, changeItems) {
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
function addNewWidget() {
  const node = items[count.value] || { x: 0, y: 0, w: 2, h: 1 };
  node.id = 'w_' + (count.value++);
  items.value.push(node);
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

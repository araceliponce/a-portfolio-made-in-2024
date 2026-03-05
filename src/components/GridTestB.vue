<template>
  <button class="small" @click="addNewWidget">Add New Widget</button>
  <div class="grid-stack">
    <div v-for="(w, index) in items" :key="w.id" :data-gs-x="w.x" :data-gs-y="w.y" :data-gs-width="w.w" :data-gs-height="w.h" :data-gs-id="w.id" :id="w.id" class="grid-stack-item">
      <div class="grid-stack-item-content">
        <button class="small" @click="remove(w)">remove</button>
        {{ w.customText }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
// import GridStack from 'gridstack';

let grid = null;
let count = ref(3);
let items = ref([]);
const customTextArray = ['Custom Text 1', 'Custom Text 2', 'Custom Text 3'];

// let info;
let gridInfo = ref('');


const initGridstack = async () => {
  return new Promise((resolve) => {
    // const script = document.createElement('script');
    // script.src = 'ruta/a/gridstack.min.js'; // Replace with the correct path to Gridstack.js
    // script.onload = () => {
    grid = GridStack.init({
      float: false,
      cellHeight: '70px', // You can adjust this as needed
      minRow: 2,
      acceptWidgets: true,
    });

    // Initialize items with initial positions
    for (let i = 0; i < count.value; i++) {
      items.value.push({
        x: 0,
        y: 0,
        w: 2,
        h: 1,
        id: 'w_' + i,
        customText: customTextArray[i],
      });
      // }

      grid.on('change', (event, changeItems) => {
        updateInfo();
        changeItems.forEach((item) => {
          const widget = items.value.find((w) => w.id === item.id);
          if (!widget) {
            alert('Widget not found: ' + item.id);
            return;
          }
          widget.x = item.x;
          widget.y = item.y;
          widget.w = item.w;
          widget.h = item.h;
        });
      });

      grid.on('dragstop', (event, element) => {
        const node = element.gridstackNode;
        console.log('dragstopppp')
        infoGrid.value = `You just dragged node #${node.id} to ${node.x}, ${node.y}`;
        console.log(infoGrid.value)
      });

      resizeGrid();
      window.addEventListener('resize', resizeGrid);
      grid.enableMove(true); // Enable dragging for Gridstack items
      resolve();
    };
    document.head.appendChild(script);
  });
};

onMounted(async () => {
  await initGridstack(); // Wait for Gridstack initialization
});

const resizeGrid = () => {
  if (grid) {
    const width = document.body.clientWidth;
    // Adjust grid column count and cell height based on window width
    if (width < 700) {
      grid.column(1).cellHeight('10vh');
    } else if (width < 850) {
      grid.column(3).cellHeight('5rem');
    } else if (width < 950) {
      grid.column(6).cellHeight('6rem');
    } else if (width < 1100) {
      grid.column(8).cellHeight('6rem');
    } else {
      grid.column(12).cellHeight('6rem');
    }
    console.log(grid.engine)
  }
};

const addNewWidget = () => {
  if (grid) {
    const id = count.value;
    const index = id % customTextArray.length;
    const node = {
      x: 0,
      y: 0,
      w: 2,
      h: 2,
      id: 'w_' + id,
      customText: customTextArray[index],
    };

    items.value.push(node);
    count.value++;
    nextTick(() => {
      grid.makeWidget(node.id);
      updateInfo();
    });
  }
};

// const remove = (widget) => {
//   const index = items.value.findIndex((w) => w.id === widget.id);
//   items.value.splice(index, 1);
//   grid.removeWidget('#' + widget.id);
//   updateInfo();
// };

function remove(widget) {
  const index = items.value.findIndex(w => w.id == widget.id);
  items.value.splice(index, 1);
  const selector = '#' + widget.id;
  grid.removeWidget(selector, false);
  updateInfo();
}

const updateInfo = () => {
  // Update your info here

  // color.value = grid.engine.nodes.length == items.value.length ? 'black' : 'red';
  gridInfo.value = `Grid engine: ${grid.engine.nodes.length}, widgets: ${items.value.length}`;
  console.log(gridInfo.value);


};
</script>

<style scoped>
.small {
  font-size: 0.8rem;
}

.grid-stack {
  background-color: pink;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14ch, 1fr));
  gap: var(--gap, 1rem);
  min-height: 300px;
}

.grid-stack-item {
  background-color: #3498db;
  color: #ffffff;
  text-align: center;
  padding: 1rem;
  border: 1px solid #dddddd;
  cursor: grab;
  user-select: none;
}

.grid-stack-item-content {
  height: 100%;
}
</style>

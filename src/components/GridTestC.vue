<template>
  <div class="relative">

    <button id="addNew" type="button" @click="addNewWidget2()">Add Widget pos [0,0]</button>

    <div>{{ info }}</div>
    <br>
    <div><b :style="{ color: color }">{{ gridInfo }}</b></div>
    <br>

    <div class="grid-stack">
      <div v-for="(w, indexs) in items" class="grid-stack-item" :gs-x="w.x" :gs-y="w.y" :gs-w="w.w" :gs-h="w.h" :gs-id="w.id" :id="w.id" :key="w.id">
        <div class="grid-stack-item-content">
          <div>{{ w.customText }}</div>
          <button class="btnRemove" @click="remove(w)">x</button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from "vue";

export default {
  setup() {
    let count = ref(1);
    let info = ref("");
    let gridFloat = ref(false);
    let color = ref("black");
    let gridInfo = ref("");
    let grid = null;
    let items = ref([]);
    let layout = 'moveScale';


    const customTextArray = ['Custom Text 1', 'Custom Text 2', 'Custom Text 3'];
    // Initialize items with three grid items
    // for (let i = 0; i < count.value; i++) {
    //   items.value.push({ x: 0, y: 0, w: 2, h: 1, id: 'w_' + i, customText: customTextArray[i] });
    // }



    onMounted(() => {
      grid = GridStack.init({
        float: false,
        cellHeight: "70px",
        minRow: 1,

        disableOneColumnMode: true, // will manually do 1 column
        // 
        // column: 3
        margin: 13
      });

      // Load the initial layout
      let items = ref([
        { x: 0, y: 0, w: 2, customText: "0" },
        { x: 2, y: 0, w: 2, h: 2, customText: "1" },
        { x: 5, y: 0, customText: "2" },
        { x: 1, y: 3, w: 4, customText: "3" },
        { x: 5, y: 2, w: 2, customText: "4" },
        { x: 0, y: 4, w: 12, customText: "5" },
      ]);

      // grid.load(items.value); cargaban pero sin un attr w_id ni su boton de remover
      // Load the initial layout
      // loadInitialLayout();


      console.log(grid.engine)

      grid.on("dragstop", function (event, element) {
        const node = element.gridstackNode;
        info.value = `you just dragged node #${node.id} to ${node.x},${node.y} – good job!`;
      });

      grid.on("change", onChange);
    });

    function changeFloat() {
      gridFloat.value = !gridFloat.value;
      grid.float(gridFloat.value);
    }

    function onChange(event, changeItems) {
      updateInfo();
      changeItems.forEach((item) => {
        const widget = items.value.find((w) => w.id == item.id);
        if (!widget) {
          alert("Widget not found: " + item.id);
          console.log(item.id, 'este id no encontre')
          return;
        }
        widget.x = item.x;
        widget.y = item.y;
        widget.w = item.w;
        widget.h = item.h;
      });
    }

    function original_addNewWidget2() {
      const node = items.value[count.value] || { x: 0, y: 0, w: 2, h: 2 };
      node.id = "w_" + count.value++;
      items.value.push(node);
      nextTick(() => {
        grid.makeWidget(node.id);
        updateInfo();
      });
    }

    function old_addNewWidget2() {
      const id = count.value;
      const index = id % customTextArray.length; // Calculate the index based on the current count
      const node = {
        x: 0,
        y: 0,
        w: 2,
        h: 2,
        id: 'w_' + id,
        customText: customTextArray[index], // Use index to get custom text
      };
      items.value.push(node);
      count.value++;
      nextTick(() => {
        grid.makeWidget(node.id);
        updateInfo();
      });
    }
    function addNewWidget2() {

      // si hay 19 nodes, puedes agrgar, si hay 20 no
      if (grid.engine.nodes.length < 13) {
        const id = count.value;
        const index = id % customTextArray.length; // Calculate the index based on the current count


        // defaults
        let w = 0;
        let x = 0;
        let customText = customTextArray[index]
        // en phone, node.w es un random entre 4,5 o 6
        // luego comprombamos
        if (window.innerWidth < 768) {
          // Set w to 4, 5, or 6 based on your preference
          // w = Math.floor(Math.random() * 3) + 4; // Generates 4, 5, or 6
          w = 6;
          x = 6; //asi parecera que aparece en una segunda columna
          if (id > 10) {
            x = 0 //va a la 1ra columna y de alli continua
            customText = 'en primera col'
          }
        } else {
          // Set x to 4, 5, 6, or 8 based on your preference
          // x = [4, 5, 6, 8][Math.floor(Math.random() * 4)]; // Generates 4, 5, 6, or 8
          w = 4;
          if (id > 8) {
            x = 9 //va a la tercera columna y de alli continua
            customText = 'hi'
          }
        }

        const node = {
          x: x,
          y: 0,
          w: w,
          h: 2,
          id: 'w_' + id,
          customText: customText, // Use index to get custom text
        };


        items.value.push(node);
        count.value++;
        nextTick(() => {
          grid.makeWidget(node.id);
          updateInfo();
        });

      }
    }




    function remove(widget) {
      const index = items.value.findIndex((w) => w.id == widget.id);
      items.value.splice(index, 1);
      const selector = `#${widget.id}`;
      grid.removeWidget(selector, false);
      updateInfo();
    }

    function updateInfo() {
      color.value =
        grid.engine.nodes.length == items.value.length ? "black" : "red";
      gridInfo.value = `Grid engine: ${grid.engine.nodes.length}, widgets: ${items.value.length}`;
    }


    function addWidgetWithDelay(customText, delay) {
      setTimeout(() => {
        const id = count.value++;

        // defaults
        let w = 2;
        let x = 0;
        // en phone, node.w es un random entre 4,5 o 6
        // luego comprombamos
        if (window.innerWidth < 768) {
          // Set w to 4, 5, or 6 based on your preference
          w = Math.floor(Math.random() * 3) + 4; // Generates 4, 5, or 6
          w = 6;
        } else {
          // Set x to 4, 5, 6, or 8 based on your preference
          x = [3, 4, 5, 6][Math.floor(Math.random() * 4)]; // Generates 4, 5, 6, or 8
          x = 4 //en la columna central y ya, no random
          w = 4
        }

        const node = {
          x: x, //default or random 
          y: 0,
          w: w, //default or random
          h: 2,
          id: "w_" + id,
          customText: customText, // Puedes pasar el texto personalizado como argumento
        };
        items.value.push(node);

        nextTick(() => {
          grid.makeWidget(node.id);
          updateInfo();
        });
        // }, Math.random() * 1000 + 200); // Genera retrasos aleatorios entre 200ms y 600ms
      }, delay); // Genera retrasos aleatorios entre 200ms y 600ms
    }

    // Ejemplo de uso:
    // Esta llamada agregará un widget con un texto personalizado después de un retraso aleatorio
    addWidgetWithDelay("Desarrollo web", 0);
    addWidgetWithDelay("Base de datos", 200);
    addWidgetWithDelay("Storytelling", 400);








    return {
      info,
      items,
      addNewWidget2,
      // removeLastWidget,
      onChange,
      grid,
      gridInfo,
      remove,
      gridFloat,
      changeFloat,
      color,
      addWidgetWithDelay,

      layout,
      // resizeGrid,
    };
  },


};
</script>

<style scoped>
/* 

https://gridstackjs.com/demo/vue3js_v-for.html 

https://github.com/gridstack/gridstack.js/blob/master/demo/demo.css

https://github.com/gridstack/gridstack.js/blob/master/demo/responsive.html

https://gridstackjs.com/demo/responsive.html

*/

.relative {
  min-height: 80vh;
  /* background-color: white; */
  border-radius: .5rem;
  overflow: hidden;
  transition: all .3s ease;

}

.grid-stack {
  background: transparent;
  position: relative;
  /* background-color: white; */
  border-radius: .5rem;
  color: black;
}

.grid-stack-item-content {
  text-align: center;
  background-color: white;

  /* en caso el texto overflows */
  overflow: hidden;
  overflow: clip;
}

.grid-stack-item-removing {
  opacity: 0.5;
}



#addNew {
  /* esta abajo, encima de lo que crees */
  position: sticky !important;
  bottom: 0;
  z-index: 1;
  left: 0;
  right: 0;
  margin: auto;
}



.grid-stack-item-content {
  cursor: grab;
  border-radius: var(--radius, .5rem);
}


#w_1 {
  --radius: 100vh;
}

#w_1 .grid-stack-item-content {
  /* border-radius: 100vh; */
  height: fit-content;
  margin: auto;
  width: fit-content;
  padding-inline: 2em;
  padding-right: 1em;
  padding-block: 1em;
  display: flex;
  gap: 1em;
  align-items: center;
  white-space: nowrap;

  /* font-size: 1.5cqw; */

}

.btnRemove {
  --size: 2rem;
  /* position: relative; */
  /* top: .5em;
  right: .5em; */
  border-radius: 100vh;
  display: grid;
  place-content: center;
  width: var(--size);
  height: var(--size);
  padding: 0;
}

#w_1 .btnRemove {
  /* background-color: transparent; */
}
</style>

<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <span>{{ msg }}</span>
</template>

<style scoped>
span {
  height: 0;
  opacity: 0;

}
</style>

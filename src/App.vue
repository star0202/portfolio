<template>
  <div class="root">
    <MenuBar />
    <Desktop />
    <div>
      <Window v-for="window in windows" :win="window" :key="window.id" />
    </div>
  </div>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
  font-family: 'Cafe24Dongdong';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Dongdong.woff')
    format('woff');
  font-weight: normal;
  font-style: normal;
}

body {
  overflow: hidden;
  font-family: Cafe24Dongdong, sans-serif;
  user-select: none;
}
</style>
<style scoped>
.root {
  @apply h-screen w-screen text-white flex flex-col;
  background: #a5abfb;
}
</style>
<script setup lang="ts">
import MenuBar from './components/MenuBar.vue'
import Desktop from './components/Desktop.vue'
import { useMainStore } from './store'
import Window from './components/Window.vue'

const { windows } = useMainStore()

</script>

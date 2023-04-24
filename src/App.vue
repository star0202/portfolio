<template>
  <div class="bg-ctp-base h-screen w-screen text-ctp-text flex flex-col">
    <MenuBar />
    <Desktop />
    <div>
      <Window v-for="window in windows" :key="window.id" :win="window" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import MenuBar from './components/MenuBar.vue'
import Desktop from './components/Desktop.vue'
import { useMainStore } from './store'
import Window from './components/Window.vue'

const { windows } = useMainStore()
</script>

<template>
  <div class="container">
    <div
      v-for="i in apps"
      :key="i.index"
      class="flex flex-col items-center w-20 h-20 justify-center gap-2"
      @click="openWindow(i.index)"
    >
      <font-awesome-icon :icon="i.icon" class="hover-icon" size="3x" />
      {{ i.name }}
    </div>
    <div class="footer">
      <a :href="`https://github.com/${paring}`" rel="noreferrer" target="_blank"
        ><div class="hover:text-ctp-blue transition-all">
          Made with pikokr ❤️
        </div></a
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { apps as appList } from '../apps'
import { useMainStore } from '../store'
import { storeToRefs } from 'pinia'
import { paring } from '../infos'

const apps = appList.map((x, i) => ({ ...x, index: i }))

const windowsStore = useMainStore()

const { windows } = storeToRefs(windowsStore)

const openWindow = (id: number) => {
  const idx = windows.value.findIndex((x) => x.id === id)
  let data
  if (idx > -1) {
    data = windows.value.splice(idx, 1)[0]
  }
  windows.value.push(
    data ?? {
      x: document.body.clientWidth / 2,
      y: document.body.clientHeight / 2,
      id: id,
    }
  )
}
</script>

<style scoped>
@import '../styles/desktop.scss';
</style>

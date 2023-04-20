<template>
  <div class="container">
    <div
      v-for="i in apps"
      class="flex flex-col items-center w-20 h-20 justify-center gap-2"
      :key="i.index"
      @click="openWindow(i.index)"
    >
      <font-awesome-icon
        :icon="i.icon ?? ['fas', 'window-maximize']"
        size="3x"
        class="shortcut-icon"
      />
      {{ i.name }}
    </div>
    <div class="footer">
      Made with pikokr ❤️
    </div>
  </div>
</template>

<script setup lang="ts">
import { apps as appList } from '../apps'
import { useMainStore } from '../store'
import { storeToRefs } from 'pinia'

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

<style scoped lang="scss">
.container {
  @apply pl-8 pt-8 flex flex-col flex-wrap flex-grow h-0 w-0 items-start gap-4;
  @media (max-width: 768px) {
    flex-direction: row !important;
    width: 100%;
    height: 0 !important;
    flex-grow: 0 !important;
  }
}

.footer {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.shortcut-icon {
  @apply shadow-2xl;
  &:hover {
    @apply brightness-95 transition-all duration-300;
    cursor: pointer;
  }
}
</style>
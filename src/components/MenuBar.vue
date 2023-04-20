<template>
  <div class="bg-black bg-opacity-50 h-12 px-4 flex items-center terminal">
    Starcea@StarPad:~$
    <div class="flex-grow" />
    <a href="https://github.com/star0202" target="_blank" rel="noreferrer">
      <font-awesome-icon :icon="['fab', 'github']" style="font-size: 18px" />
    </a>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.terminal {
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
}
</style>

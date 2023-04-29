<template>
  <div class="bg-ctp-mantle h-12 px-4 flex items-center">
    Starcea
    <div class="flex-grow" />
    <a :href="`https://github.com/${github}`" rel="noreferrer" target="_blank">
      <font-awesome-icon
        :icon="['fab', 'github']"
        style="font-size: 18px"
        class="hover-icon"
      />
    </a>
  </div>
</template>

<script lang="ts" setup>
import { github } from '../infos'
</script>

<template>
  <Comp />
</template>

<script lang="ts" setup>
import { Component } from 'vue'

const { content } = defineProps<{ content: () => Promise<Component> }>()

const Comp = await content()
</script>

<style scoped></style>

<template>
  <div class="p-8 flex gap-4">
    <img
      alt="pfp"
      class="w-36 h-36 rounded-xl"
      src="https://github.com/star0202.png"
    />
    <div class="flex-grow flex flex-col gap-1">
      <div class="text-3xl">Starcea / 스타샤</div>
      <div class="flex items-center gap-4">
        <div>Age</div>
        <div class="line-dot" />
        <div>{{ year }}y (2009/02/02)</div>
      </div>
      <div class="flex items-center gap-4">
        <div>Pronouns</div>
        <div class="line-dot" />
        <div>She/her</div>
      </div>
      <div class="flex-grow" />
      <div class="flex gap-4 text-lg">
        <a
          :href="`https://discord.gg/${discord.server}`"
          class="button-icon"
          rel="noreferrer"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'discord']" />
        </a>
        <a
          :href="`mailto:${mail}`"
          class="button-icon"
          rel="noreferrer"
          target="_blank"
        >
          <font-awesome-icon :icon="['fas', 'envelope']" />
        </a>
        <a
          :href="`https://github.com/${github}`"
          class="button-icon"
          rel="noreferrer"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a
          :href="`https://toss.me/${toss}`"
          class="button-icon"
          rel="noreferrer"
          target="_blank"
        >
          <font-awesome-icon :icon="['fas', 'gift']" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { discord, github, mail, toss } from '../infos'

const year = Math.floor(
  (Date.now() - new Date(2009, 1, 2, 0, 0, 0, 0).getTime()) /
    1000 /
    60 /
    60 /
    24 /
    365
)
</script>

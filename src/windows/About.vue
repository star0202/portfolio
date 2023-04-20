<template>
  <div class="p-8 flex gap-4">
    <img
      src="https://github.com/star0202.png"
      alt="pfp"
      class="w-36 h-36 rounded-xl"
    />
    <div class="flex-grow flex flex-col gap-1">
      <div class="text-3xl">Starcea / 스타샤</div>
      <div class="flex items-center gap-4">
        <div>Age</div>
        <div class="flex-grow border-b-2 border-black border-dotted" />
        <div>{{ year }}y/o</div>
      </div>
      <div class="flex items-center gap-4">
        <div>Pronouns</div>
        <div class="flex-grow border-b-2 border-black border-dotted" />
        <div>She/her</div>
      </div>
      <div class="flex-grow" />
      <div class="flex gap-4 text-lg">
        <a
          href="https://discord.gg/APKV8NF8Wd"
          target="_blank"
          rel="noreferrer"
          class="w-8 h-8 shadow-md ring ring-black ring-opacity-5 rounded-full flex justify-center items-center"
        >
          <font-awesome-icon :icon="['fab', 'discord']" />
        </a>
        <a
          href="mailto:stardev.uwu@gmail.com"
          target="_blank"
          rel="noreferrer"
          class="w-8 h-8 shadow-md ring ring-black ring-opacity-5 rounded-full flex justify-center items-center"
        >
          <font-awesome-icon :icon="['fas', 'envelope']" />
        </a>
        <a
          href="https://github.com/star0202"
          target="_blank"
          rel="noreferrer"
          class="w-8 h-8 shadow-md ring ring-black ring-opacity-5 rounded-full flex justify-center items-center"
        >
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a
          href="https://toss.me/starcea"
          target="_blank"
          rel="noreferrer"
          class="w-8 h-8 shadow-md ring ring-black ring-opacity-5 rounded-full flex justify-center items-center"
        >
          <font-awesome-icon :icon="['fas', 'gift']" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const year = Math.floor(
  (Date.now() - new Date(2009, 1, 2, 0, 0, 0, 0).getTime()) /
    1000 /
    60 /
    60 /
    24 /
    365
)
</script>

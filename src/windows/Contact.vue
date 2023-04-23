<template>
  <div class="p-4">
    <div class="text-2xl">Contact</div>
    <div class="flex flex-col">
      <a class="flex gap-2 items-center text-lg" href="mailto:star@crsd.team">
        <font-awesome-icon :icon="['fas', 'envelope']" />
        <span>star@crsd.team</span>
      </a>
      <a
        class="flex gap-2 items-center text-lg"
        href="https://discord.gg/APKV8NF8Wd"
        rel="noreferrer"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', 'discord']" />
        <span>{{ discord.username }}#{{ discord.discriminator }}</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
const discord = (
  await(
    await fetch('https://api.lanyard.rest/v1/users/798690702635827200')
  ).json() as any
).data.discord_user
</script>

<template>
  <div class="p-4">
    <div class="text-2xl">Contact</div>
    <div class="flex flex-col">
      <a :href="`mailto:${mail}`" class="flex gap-2 items-center text-lg">
        <font-awesome-icon :icon="['fas', 'envelope']" />
        <span>{{ mail }}</span>
      </a>
      <a
        :href="`https://discord.gg/${discord.server}`"
        class="flex gap-2 items-center text-lg"
        rel="noreferrer"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', 'discord']" />
        <span>{{ user.username }}#{{ user.discriminator }}</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { discord, mail } from '../infos'

const user = (
  (await (
    await fetch(`https://api.lanyard.rest/v1/users/${discord.id}`)
  ).json()) as any
).data.discord_user
</script>

<template>
  <div class="p-4">
    <div class="text-2xl">Teams</div>
    <div class="mt-2">
      <div v-for="team in teams" class="border-t pt-4 flex gap-4">
        <img
          v-if="team.org"
          :src="`https://github.com/${team.org}.png`"
          class="w-16 h-16 rounded-xl"
        />
        <div class="flex-grow flex flex-col gap-1">
          <div class="flex items-center gap-4">
            <div class="text-2xl">{{ team.name }}</div>
            <div class="line-dot" />
            <div class="text-md md-2">{{ team.from }} ~ {{ team.to }}</div>
          </div>
          <div class="flex items-center gap-4">
            <div>Position</div>
            <div class="line-dot" />
            <div>{{ team.position }}</div>
          </div>
          <div class="mt-1 flex gap-4 text-lg pb-4">
            <a
              v-if="team.homepage"
              :href="team.homepage"
              class="button-icon"
              rel="noreferrer"
              target="_blank"
            >
              <font-awesome-icon :icon="['fas', 'globe']" />
            </a>
            <a
              v-if="team.org"
              :href="`https://github.com/${team.org}`"
              class="button-icon"
              rel="noreferrer"
              target="_blank"
            >
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
            <a
              v-if="team.discord"
              :href="`https://discord.gg/${team.discord}`"
              class="button-icon"
              rel="noreferrer"
              target="_blank"
            >
              <font-awesome-icon :icon="['fab', 'discord']" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Team = {
  name: string
  org?: string
  discord?: string
  homepage?: string
  position: string
  from: string
  to: string
}

const teams: Team[] = [
  {
    name: 'Koreanbots',
    org: 'koreanbots',
    discord: 'koreanlist',
    homepage: 'https://koreanbots.dev',
    position: 'Developer',
    from: '2023',
    to: 'now',
  },
  {
    name: 'Team Crescendo',
    org: 'team-crescendo',
    discord: 'teamcrsd',
    homepage: 'https://team-crescendo.me',
    position: 'Bot Developer',
    from: '2023',
    to: 'now',
  },
  {
    name: 'Team White',
    org: 'dev-White-team',
    position: 'Bot Developer, Co-Leader',
    from: '2021',
    to: '2023',
  },
  {
    name: 'Studio Orora',
    position: 'Bot Developer',
    from: '2021',
    to: '2023',
  },
  {
    name: 'Team Accu',
    org: 'team-accu',
    position: 'Bot Developer',
    from: '2021',
    to: '2023',
  },
]
</script>

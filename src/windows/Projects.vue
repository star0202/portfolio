<template>
  <div class="p-4">
    <div class="text-2xl">{{ projects.length }} Noteable Projects</div>
    <div class="mt-2">
      <div v-for="project in projects" class="border-t pt-4">
        <div class="flex-grow flex flex-col gap-1">
          <div class="flex items-center gap-4">
            <div class="text-xl">{{ project.name }}</div>
            <div class="line-dot" />
            <div class="text-md md-2">{{ project.techs.join(', ') }}</div>
          </div>
          <div class="flex items-center gap-4">{{ project.description }}</div>
          <div class="mt-1 flex gap-4 text-lg pb-4">
            <a
              v-if="project.repo"
              :href="`https://github.com/${project.repo}`"
              class="button-icon"
              rel="noreferrer"
              target="_blank"
            >
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
            <a
              v-if="project.web"
              :href="project.web"
              class="button-icon"
              rel="noreferrer"
              target="_blank"
            >
              <font-awesome-icon :icon="['fas', 'globe']" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
type Project = {
  name: string
  techs: string[]
  description: string
  repo?: string
  web?: string
}

const projects: Project[] = [
  {
    name: 'discord-profile',
    techs: ['TypeScript', 'Fastify', 'React'],
    description: 'Generates profile banner based on Discord profile',
    repo: 'star0202/discord-profile',
  },
  {
    name: 'Logomatic',
    techs: ['TypeScript'],
    description: 'Personal Discord Logger',
    repo: 'star0202/Logomatic',
  },
  {
    name: 'dibug',
    techs: ['Python'],
    description: 'Debugging Tool for discord.py',
    repo: 'star0202/dibug',
  },
  {
    name: 'Portfolio',
    techs: ['Vue', 'TypeScript'],
    description: 'This Website!',
    repo: 'star0202/portfolio',
    web: 'https://starcea.vercel.app/',
  },
  {
    name: 'neis.ts',
    techs: ['TypeScript'],
    description: 'NEIS API Wrapper written in TypeScript',
    repo: 'star0202/neis.ts',
  },
  {
    name: 'jdbot-ts2',
    techs: ['TypeScript'],
    description: 'Utility Discord Bot for School Discord Server',
    repo: 'star0202/jdbot-ts2',
  },
  {
    name: 'Rena',
    techs: ['Python'],
    description: 'Rena of Team Crescendo',
    web: 'https://team-crescendo.me/project/rena/',
  },
  {
    name: 'Crenata',
    techs: ['Python'],
    description: 'Rena Open Source Project',
    repo: 'team-crescendo/Crenata',
  },
  {
    name: 'Rena-Reverse',
    techs: ['Python'],
    description: 'Reverse Engineered version of Rena',
    repo: 'star0202/Rena-Reverse',
  },
  {
    name: 'github-bot-py',
    techs: ['Python'],
    description: 'Utility Discord Bot for Github',
    repo: 'star0202/github-bot-py',
  },
  {
    name: 'Epbot-Origin',
    techs: ['Python'],
    description: 'Epbot Open Source',
    repo: 'kimusoft/Epbot-Origin',
  },
  {
    name: 'Selenium',
    techs: ['Python'],
    description: 'Utility Discord Bot for School Coding Club Exhibition',
    repo: 'star0202/Selenium',
  },
  {
    name: 'WhiteBot',
    techs: ['Python'],
    description: 'Utility Discord Bot',
    repo: 'dev-White-Team/WhiteBot',
  },
]
</script>

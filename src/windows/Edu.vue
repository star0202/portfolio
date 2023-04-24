<template>
  <div class="p-4">
    <div class="text-2xl">{{ educations.length }} Noteable Educations</div>
    <div class="mt-2">
      <div v-for="edu in educations" class="border-t pt-4">
        <div class="flex-grow flex flex-col gap-1">
          <div class="flex items-center gap-4">
            <div class="text-xl">
              {{ edu.name + (edu.isGifted ? ' (Gifted Edu)' : '') }}
            </div>
            <div class="line-dot" />
            <div class="text-md md-2">
              {{ edu.from + (edu.to ? ' ~ ' + edu.to : '') }}
            </div>
          </div>
          <div v-if="edu.description" class="flex items-center gap-4">
            {{ edu.description }}
          </div>
          <div class="flex gap-4 text-lg pb-4">
            <a
              v-if="edu.homepage"
              :href="edu.homepage"
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
type Education = {
  name: string
  description?: string
  homepage?: string
  isGifted?: boolean
  from: string
  to?: string
}

const educations: Education[] = [
  {
    name: 'KAGE',
    description: 'IQ: 142(K-WPPSI), 168(Mensa)',
    homepage: 'http://kage.co.kr/',
    isGifted: true,
    from: '2014',
  },
  {
    name: 'KAIST',
    description: 'Algorithm',
    homepage: 'http://talented.kaist.ac.kr/',
    isGifted: true,
    from: '2020',
  },
  {
    name: 'SNU',
    description: 'Mathematics and Computer Science',
    homepage: 'http://gifted.snu.ac.kr',
    isGifted: true,
    from: '2023',
    to: 'now',
  },
]
</script>

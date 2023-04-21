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
            <div class="flex-grow border-b-2 border-black border-dotted" />
            <div class="text-md md-2">
              {{ edu.from + (edu.to ? ' ~ ' + edu.to : '') }}
            </div>
          </div>
          <div class="flex items-center gap-4" v-if="edu.description">
            {{ edu.description }}
          </div>
          <div class="flex gap-4 text-lg pb-4">
            <a
              :href="edu.homepage"
              target="_blank"
              rel="noreferrer"
              class="w-8 h-8 shadow-md ring ring-black ring-opacity-5 rounded-full flex justify-center items-center"
              v-if="edu.homepage"
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

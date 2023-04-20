import { Component } from 'vue'

export type Window = {
  name: string
  title: string
  icon?: string[]
  width: number
  height: number
  content: () => Promise<Component>
}

export const apps = [
  {
    name: 'About',
    title: 'About Me',
    icon: ['fas', 'address-card'],
    width: 500,
    height: 210,
    content: async () => (await import('./windows/About.vue')).default,
  },
  {
    name: 'Teams',
    title: 'Teams',
    icon: ['fas', 'users'],
    width: 500,
    height: 400,
    content: async () => (await import('./windows/Teams.vue')).default,
  },
] as Window[]

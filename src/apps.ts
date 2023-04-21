import { Component } from 'vue'

export type Window = {
  name: string
  title: string
  icon: string[]
  width: number
  height: number
  content: () => Promise<Component>
}

export const apps: Window[] = [
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
    width: 450,
    height: 400,
    content: async () => (await import('./windows/Teams.vue')).default,
  },
  {
    name: 'Projects',
    title: 'Projects',
    icon: ['fas', 'project-diagram'],
    width: 300,
    height: 500,
    content: async () => (await import('./windows/Projects.vue')).default,
  },
]

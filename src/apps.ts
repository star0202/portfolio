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
    width: 400,
    height: 500,
    content: async () => (await import('./windows/Projects.vue')).default,
  },
  {
    name: 'Educations',
    title: 'Educations',
    icon: ['fas', 'graduation-cap'],
    width: 400,
    height: 400,
    content: async () => (await import('./windows/Edu.vue')).default,
  },
  {
    name: 'Skills',
    title: 'Skills',
    icon: ['fas', 'tools'],
    width: 600,
    height: 600,
    content: async () => (await import('./windows/Skills.vue')).default,
  },
  {
    name: 'Contact',
    title: 'Contact',
    icon: ['fas', 'envelope'],
    width: 300,
    height: 150,
    content: async () => (await import('./windows/Contact.vue')).default,
  },
  {
    name: 'Detailed',
    title: 'Redirecting...',
    icon: ['fas', 'info-circle'],
    width: 300,
    height: 100,
    content: async () => (await import('./windows/Detailed.vue')).default,
  },
]

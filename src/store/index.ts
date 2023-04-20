import { defineStore } from 'pinia'

export type WindowData = {
  id: number
  x: number
  y: number
}

export const useMainStore = defineStore('main', {
  state: () => ({
    windows: [] as WindowData[],
  }),
})

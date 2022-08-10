import { defineStore } from 'pinia'
import { themeSettings } from '@/settings'
export const useThemeStore = defineStore('theme', {
  state() {
    return {
      tags: themeSettings.tag || { visible: true, height: 50 },
      header: themeSettings.header || { height: 60 },
      naiveThemeOverrides: themeSettings.naiveThemeOverrides || {
        common: {
          primaryColor: '#1a73e8',
          primaryColorHover: '#1a73e8',
          primaryColorPressed: '#1a73e8',
          primaryColorSuppl: '#1a73e8',
        },
      },
    }
  },
  actions: {
    setTabVisible(visible) {
      this.tags.visible = visible
    },
  },
})

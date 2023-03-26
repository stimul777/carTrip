import { defineStore } from 'pinia'

//
// Переключение языков
//
export const useLocalization = defineStore({
  id: 'theme-store',

  getters: {
    getTheme(state): boolean {
      //@ts-ignore
      if (JSON.parse(localStorage.getItem('isTheme')) === null) {
        localStorage.setItem('isTheme', JSON.stringify(state.isDayOrNight))
      }
      //@ts-ignore
      state.isDayOrNight = JSON.parse(localStorage.getItem('isTheme'))
      return state.isDayOrNight
    }
  },

  actions: {
    setTheme(event: boolean): void {
      this.$patch((state: any) => {
        localStorage.setItem('isTheme', JSON.stringify(event))
        //@ts-ignore
        state.isDayOrNight = JSON.parse(localStorage.getItem('isTheme'))
      })
    }
  },

  state: () => ({
    appText: {
      ru: {
        header: 'Калькулятор'
      },
      en: {
        header: 'Calculator'
      }
    }
  })
})

export default useLocalization

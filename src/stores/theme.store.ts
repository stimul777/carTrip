import { defineStore } from 'pinia'

//
// Дневная и ночная тема приложения
//
export const useThemeStore = defineStore({
  id: 'theme-store',

  state: () => ({
    isDayOrNight: false //true - день, false - ночь
  }),

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
  }
})

export default useThemeStore

import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'

//
// Переключение языков
//
export const useLocalization = defineStore({
  id: 'localization-store',

  state: () => ({
    lang: 'ru'
  }),

  getters: {
    getLang(state): boolean {
      const { locale } = useI18n()
      //@ts-ignore
      if (JSON.parse(localStorage.getItem('isLocal')) === null) {
        localStorage.setItem('isLocal', JSON.stringify(state.lang))
      }
      //@ts-ignore
      state.lang = JSON.parse(localStorage.getItem('isLocal'))
      locale.value = state.lang
      return state.lang === 'ru' ? false : true
    }
  },

  actions: {
    setLang(event: boolean): void {
      this.$patch((state: any) => {
        const lang = event ? 'en' : 'ru'
        localStorage.setItem('isLocal', JSON.stringify(lang))
        //@ts-ignore
        state.lang = JSON.parse(localStorage.getItem('isLocal'))
      })
    }
  }
})

export default useLocalization

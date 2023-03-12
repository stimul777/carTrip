import { ref, computed } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { getMap } from '@/api/yandexMap.api'

// import ymaps from 'ymaps'

//
// Карты. Создание, данные
//
export const useYampStore = defineStore({
  id: 'yamp-store',

  state: () => ({
    // yamps: null,
    maps: null as any, //загружаемый класс карт

    distanceBetweenPoints: 0, //расстояние между точками в км.
    pointA: '',
    pointB: ''
  }),

  getters: {
    operationTypes(state) {}
  },

  actions: {
    async load() {
      await getMap().then((maps: any) => {
        this.$patch(async (state: any) => {
          state.maps = maps
        })
      })
    }
  }
})

export default useYampStore

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useYampStore, import.meta.hot))
// }

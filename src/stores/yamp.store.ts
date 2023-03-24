import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getMap } from '@/api/yandexMap.api'

//
// Карты. Создание, данные
//
export const useYampStore = defineStore({
  id: 'yamp-store',

  state: () => ({
    // yamps: null,
    maps: null, //загружаемый класс карт

    distanceBetweenPoints: 0, //расстояние между точками в км.
    pointA: '',
    pointB: ''
  }),

  actions: {
    async load() {
      await getMap().then((maps) => {
        this.$patch((state) => {
          state.maps = maps
        })
      })
    }
  }
})

export default useYampStore

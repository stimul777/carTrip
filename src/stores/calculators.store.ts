import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

//
// Калькулятор. Хранение данных
//
export const useCalculatorsStore = defineStore({
  id: 'calculators-store',

  state: () => ({
    gasolineConsumption: 11, //Расход бензина на 100км
    pricePerLiter: 53, //Цена бензина за 1 литр

    fuelVolume: 60, //Кол-во бензина в баке
    fullConsumption: 500 //Дистанция которую проехал на fuelVolume
  }),

  getters: {},

  actions: {}
})

export default useCalculatorsStore

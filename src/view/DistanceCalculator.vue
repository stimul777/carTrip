<template>
  <section class="distance-calculator-container">
    <UIAutocomplete
      :items="cities"
      label="Откуда"
      @search="onSearch($event)"
      @updateValue="setPoint($event, 'A')"
    />
    <!-- Добавить + дополнительные точки -->
    <UIAutocomplete
      :items="cities"
      label="Куда"
      @search="onSearch($event)"
      @updateValue="setPoint($event, 'B')"
    />
    <UIinput
      label="Расстояние в км"
      :hint="'Расстояние от точки а к точке Б'"
      :modelValue="distance"
    />
    <UIinput
      label="Расход бензина на 100км"
      :value="gasolineСonsumption"
      @update:modelValue="gasolineСonsumption = $event"
    />
    <UIinput
      label="Цена за 1 литр бензина"
      :value="pricePerLiter"
      @update:modelValue="pricePerLiter = $event"
    />

    <Price :value="price" />
    <!-- <UIButton label="Рассчитать" /> -->
    <!-- <div>Цена: {{  }}</div> -->
  </section>
</template>

<script lang="ts">
import { ref, Ref, computed } from 'vue'
import useYampStore from '@/stores/yamp.store'
// components
import UIAutocomplete from '@/components/kit/UIAutocomplete.vue'
import UIinput from '@/components/kit/UIInput.vue'
import UIButton from '@/components/kit/UIButton.vue'
import Price from '@/components/Price.vue'

export default {
  name: 'DistanceCalculatorView',
  components: {
    UIAutocomplete,
    UIinput,
    UIButton,
    Price
  },
  props: {},

  setup(props) {
    const store = useYampStore()
    const itemsSearch: Ref<[]> = ref([])

    const gasolineСonsumption = ref(11)
    const pricePerLiter = ref(53)

    const onSearch = async (value: string) => {
      console.log('onSearch', value)
      await store.maps
        .suggest(value)
        .then(function (items) {
          // console.log('items', items)
          itemsSearch.value = items
          // items - массив поисковых подсказок.
        })
        .catch((error: any) => console.log('Failed to load Yandex Maps', error))
    }

    const setPoint = (value: string, pointName: 'A' | 'B') => {
      switch (pointName) {
        case 'A':
          store.pointA = value
          console.log('calc point A', store.pointA)
          break
        case 'B':
          store.pointB = value
          break
      }
    }

    const cities = computed(() => {
      return itemsSearch.value.map((item: any) => item.displayName)
    })

    const distance = computed(() => {
      return store.distanceBetweenPoints
    })

    // (пройденный путь в км) / 100 * (расход на 100км) * (цена за 1л бензина)
    const price = computed(() => {
      return Math.round(
        (store.distanceBetweenPoints / 100) * gasolineСonsumption.value * pricePerLiter.value
      )
    })

    return {
      distance,
      itemsSearch,
      cities,
      price,
      gasolineСonsumption,
      pricePerLiter,
      onSearch,
      setPoint
    }
  }
}
</script>

<style scoped>
.distance-calculator-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  border: 1px solid red;
}
</style>

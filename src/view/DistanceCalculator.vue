<template>
  <section class="distance-calculator-container">
    <UIAutocomplete
      :items="cities"
      label="Откуда"
      @search="onSearch($event)"
      @updateValue="setPoint($event, 'A')"
    />
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
    <UIinput label="Расход бензина на 100км" />
    <UIinput label="Цена за 1 литр бензина" />

    <UIButton label="Рассчитать" />
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

export default {
  name: 'DistanceCalculatorView',
  components: {
    UIAutocomplete,
    UIinput,
    UIButton
  },
  props: {},

  setup(props) {
    const store = useYampStore()
    const itemsSearch: Ref<[]> = ref([])

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

    return { distance, itemsSearch, cities, onSearch, setPoint }
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

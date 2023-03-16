<template>
  <section class="distance-calculator-container">
    <!-- <div class="field-container"> -->
    <UIAutocomplete
      :items="cities"
      label="Откуда"
      @search="onSearch($event)"
      @updateValue="setPoint($event, 'A')"
    />

    <!-- <v-tooltip text="Tooltip">
        <template v-slot:activator="{ props }"> <v-icon icon="mdi-help"></v-icon> </template>
      </v-tooltip> -->
    <!-- </div> -->

    <!-- Добавить + дополнительные точки -->
    <UIAutocomplete
      :items="cities"
      label="Куда"
      @search="onSearch($event)"
      @updateValue="setPoint($event, 'B')"
    />
    <UIinput
      label="Расстояние в км"
      :modelValue="store.distanceBetweenPoints"
      @update:modelValue="store.distanceBetweenPoints = $event"
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

    <Price icon="mdi-currency-rub" text="Цена поездки: " unit=" р" :value="price" />
  </section>
</template>

<script lang="ts">
import { computed, ref, Ref } from 'vue'
import useYampStore from '@/stores/yamp.store'
// components
import UIAutocomplete from '@/components/kit/UIAutocomplete.vue'
import UIinput from '@/components/kit/UIInput.vue'
import Price from '@/components/Price.vue'

export default {
  name: 'DistanceCalculatorView',
  components: {
    UIAutocomplete,
    UIinput,
    // UIButton,
    Price
  },
  props: {},

  setup(props) {
    const store = useYampStore()
    const itemsSearch: Ref<[]> = ref([])

    const gasolineСonsumption = ref(11)
    const pricePerLiter = ref(53)

    const onSearch = async (value: string) => {
      await store.maps
        .suggest(value)
        .then(function (items) {
          itemsSearch.value = items
        })
        .catch((error: any) => console.log('Failed to load Yandex Maps', error))
    }

    const setPoint = (value: string, pointName: 'A' | 'B') => {
      switch (pointName) {
        case 'A':
          store.pointA = value
          break
        case 'B':
          store.pointB = value
          break
      }
    }

    const cities = computed(() => {
      return itemsSearch.value.map((item: any) => item.displayName)
    })

    // цена = (пройденный путь в км) / 100 * (расход на 100км) * (цена за 1л бензина)
    const price = computed(() => {
      return Math.round(
        (store.distanceBetweenPoints / 100) * gasolineСonsumption.value * pricePerLiter.value
      )
    })

    return {
      itemsSearch,
      cities,
      price,
      gasolineСonsumption,
      pricePerLiter,
      store,
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
  height: 400px;
}

.field-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid red; */
  width: 300px;
  height: 50px;
}
</style>

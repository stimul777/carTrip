<template>
  <section class="distance-calculator-container">
    <UIAutocomplete
      :items="cities"
      :label="t('calcDistance.from.value')"
      @search="onSearch($event)"
      @updateValue="setPoint($event, 'A')"
    />
    <!-- Добавить + дополнительные точки -->
    <UIAutocomplete
      :items="cities"
      :label="t('calcDistance.where.value')"
      @search="onSearch($event)"
      @updateValue="setPoint($event, 'B')"
    />
    <UIinput
      class="input"
      :label="t('calcDistance.distance.value')"
      :modelValue="yampStore.distanceBetweenPoints"
      @update:modelValue="yampStore.distanceBetweenPoints = $event"
    />
    <UIinput
      class="input"
      :label="t('calcDistance.fuelConsumption.value')"
      :value="calcsStore.gasolineConsumption"
      @update:modelValue="calcsStore.gasolineConsumption = $event"
    />
    <UIinput
      class="input"
      :label="t('calcDistance.priceGasoline.value')"
      :value="calcsStore.pricePerLiter"
      @update:modelValue="calcsStore.pricePerLiter = $event"
    />

    <Price
      icon="mdi-currency-rub"
      :text="t('calcDistance.priceOfTrip')"
      :color="textColor"
      :value="price"
      unit=" р"
    />
  </section>
</template>

<script lang="ts">
import { computed, ref, Ref } from 'vue'
import useYampStore from '@/stores/yamp.store'
import useCalculatorsStore from '@/stores/calculators.store'
import useThemeStore from '@/stores/theme.store'
import { useI18n } from 'vue-i18n'

// components
import UIAutocomplete from '@/components/kit/UIAutocomplete.vue'
import UIinput from '@/components/kit/UIInput.vue'
import Price from '@/components/kit/UIPrice.vue'

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
    const { t } = useI18n()
    const yampStore = useYampStore()
    const calcsStore = useCalculatorsStore()
    const theme = useThemeStore()

    const itemsSearch: Ref<[]> = ref([])

    const onSearch = async (value: string) => {
      await yampStore.maps
        .suggest(value)
        .then(function (items) {
          itemsSearch.value = items
        })
        .catch((error: any) => console.log('Failed to load Yandex Maps', error))
    }

    const setPoint = (value: string, pointName: 'A' | 'B') => {
      switch (pointName) {
        case 'A':
          yampStore.pointA = value
          break
        case 'B':
          yampStore.pointB = value
          break
      }
    }

    const cities = computed(() => {
      return itemsSearch.value.map((item: any) => item.displayName)
    })

    // цена = (пройденный путь в км) / 100 * (расход на 100км) * (цена за 1л бензина)
    const price = computed(() => {
      return Math.round(
        (yampStore.distanceBetweenPoints / 100) *
          calcsStore.gasolineConsumption *
          calcsStore.pricePerLiter
      )
    })

    const textColor = computed(() => (theme.isDayOrNight ? 'black' : 'white'))

    return {
      itemsSearch,
      cities,
      price,
      calcsStore,
      yampStore,
      textColor,
      onSearch,
      setPoint,
      t
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
  /* border: 1px solid red; */
  min-height: 460px;
}

.field-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid red; */
  width: 300px;
  height: 50px;
}

.input {
  height: 20px;
  width: 220px;
}
</style>

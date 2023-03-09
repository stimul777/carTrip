<template>
  <section class="distance-calculator-container">
    <UIAutocomplete label="Откуда" />
    <UIAutocomplete label="Куда" />
    <UIinput label="Расход бензина на 100км" />
    <UIinput label="Расстояние в км" />
    <UIButton label="Рассчитать" />
  </section>
</template>

<script lang="ts">
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
    return {}
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

<template>
  <section class="expense-calculator-container">
    <div class="input-container">
      <UIinput
        class="input"
        label="Сколько залил топлива в бак в литрах"
        :value="fuelVolume"
        @update:modelValue="fuelVolume = $event"
      />
      <UIinput
        class="input"
        label="Сколько км проехал на этом топливе"
        :value="distance"
        @update:modelValue="distance = $event"
      />
    </div>

    <Price text="Расход топлива на 100км: " unit=" л" icon="mdi-fuel" :value="consumption" />
  </section>
</template>

<script lang="ts">
import { computed, ref } from 'vue'
import UIinput from '@/components/kit/UIInput.vue'
import Price from '@/components/Price.vue'

export default {
  components: {
    UIinput,
    Price
  },
  props: {},

  setup(props) {
    const fuelVolume = ref(60)
    const distance = ref(500)

    100
    const consumption = computed(() => Math.round((fuelVolume.value / distance.value) * 100))

    // (литры / километры) х
    return { fuelVolume, distance, consumption }
  }
}
</script>

<style scoped>
.expense-calculator-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 300px;
}

.input-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  /* border: 1px solid red; */
}

.input {
  /* max-height: 60px; */
  /* border: 1px solid red; */
}
</style>

<template>
  <section class="expense-calculator-container">
    <div class="input-container">
      <UIinput
        class="input"
        label="Сколько залил топлива в бак в литрах"
        :value="calcsStore.fuelVolume"
        @update:modelValue="calcsStore.fuelVolume = $event"
      />
      <UIinput
        class="input"
        label="Сколько км проехал на этом топливе"
        :value="calcsStore.fullConsumption"
        @update:modelValue="calcsStore.fullConsumption = $event"
      />
    </div>

    <Price text="Расход топлива на 100км: " unit=" л" icon="mdi-fuel" :value="consumption" />
  </section>
</template>

<script lang="ts">
import { computed, ref, watch } from 'vue'
import useCalculatorsStore from '@/stores/calculators.store'
import UIinput from '@/components/kit/UIInput.vue'
import Price from '@/components/Price.vue'

export default {
  components: {
    UIinput,
    Price
  },

  setup() {
    const calcsStore = useCalculatorsStore()

    // (литры / километры) х 100
    const consumption = computed(() => {
      const result = Math.round((calcsStore.fuelVolume / calcsStore.fullConsumption) * 100)

      return result
    })

    watch(consumption, (value) => {
      calcsStore.gasolineConsumption = value
    })

    return { calcsStore, consumption }
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

<template>
  <section class="expense-calculator-container">
    <div class="input-container">
      <UIinput
        class="input"
        :label="t('calcExpense.fuelVolumeInLiters.value')"
        :value="calcsStore.fuelVolume"
        @update:modelValue="calcsStore.fuelVolume = $event"
      />
      <UIinput
        class="input"
        :label="t('calcExpense.driveOnFuel.value')"
        :value="calcsStore.fullConsumption"
        @update:modelValue="calcsStore.fullConsumption = $event"
      />
    </div>
    <Price
      :text="t('calcExpense.fuelConsumption.value')"
      :value="consumption"
      :class="textColor"
      class="test"
      unit=" л"
      icon="mdi-fuel"
    />
  </section>
</template>

<script lang="ts">
import { computed, ref, watch } from 'vue'
import useCalculatorsStore from '@/stores/calculators.store'
import useThemeStore from '@/stores/theme.store'
import { useI18n } from 'vue-i18n'
import UIinput from '@/components/kit/UIInput.vue'
import Price from '@/components/kit/UIPrice.vue'

export default {
  components: {
    UIinput,
    Price
  },

  setup() {
    const { t } = useI18n()
    const theme = useThemeStore()

    const calcsStore = useCalculatorsStore()

    // (литры / километры) х 100
    const consumption = computed(() => {
      return Math.round((calcsStore.fuelVolume / calcsStore.fullConsumption) * 100)
    })

    watch(consumption, (value) => {
      calcsStore.gasolineConsumption = value
    })

    const textColor = computed(() => (theme.isDayOrNight ? 'theme-day' : 'theme-night'))

    return { calcsStore, consumption, textColor, t }
  }
}
</script>

<style scoped>
.theme-day {
  color: var(--cyanide-sea-wave) !important;
}

.theme-night {
  color: var(--dark-blue);
}

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
  height: 20px;
  width: 220px;
}
</style>

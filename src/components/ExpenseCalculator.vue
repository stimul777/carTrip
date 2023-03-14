<template>
  <section class="expense-calculator-container">
    <div class="input-container">
      <UIinput
        class="input"
        label="Сколько залил топлива в бак"
        :value="gasolineСonsumption"
        @update:modelValue="gasolineСonsumption = $event"
      />
      <UIinput
        class="input"
        label="Сколько км проехал на этом топливе"
        :value="pricePerLiter"
        @update:modelValue="pricePerLiter = $event"
      />
    </div>

    <Price text="Расход топлива на 100км: " unit=" л" icon="mdi-fuel" :value="price" />
  </section>
</template>

<script lang="ts">
import UIinput from '@/components/kit/UIInput.vue'
import Price from '@/components/Price.vue'

export default {
  components: {
    UIinput,
    Price
  },
  props: {},

  setup(props) {
    return {}
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
  height: 200px;
  /* border: 1px solid red; */
}

.input {
  max-height: 60px;
  /* border: 1px solid red; */
}
</style>

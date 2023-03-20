<template>
  <div>
    <v-switch
      v-model="isSwitch"
      append-icon="mdi-weather-night"
      prepend-icon="mdi-white-balance-sunny"
      class="switch"
    ></v-switch>
  </div>
</template>

<script lang="ts">
import { ref, Ref, watch } from 'vue'

export default {
  name: 'SwitchThemes',

  emits: ['selectedTheme'],

  setup(props, { emit }) {
    const isSwitch: Ref<'day' | 'night'> = ref('night')

    watch(
      () => isSwitch.value,
      () => emit('selectedTheme', isSwitch.value),
      { immediate: true }
    )

    return { isSwitch }
  }
}
</script>

<style scoped></style>

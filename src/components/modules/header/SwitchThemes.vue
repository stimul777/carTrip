<template>
  <div>
    <v-switch
      v-model="value"
      append-icon="mdi-white-balance-sunny"
      prepend-icon="mdi-weather-night"
      class="switch"
    ></v-switch>
  </div>
</template>

<script lang="ts">
import { ref, watch } from 'vue'
import type { Ref } from 'vue'

export default {
  name: 'SwitchThemes',

  props: {
    isSwitch: {
      type: Boolean
    }
  },

  emits: ['selectedTheme'],

  setup(props, { emit }) {
    const value: Ref<Boolean> = ref(props.isSwitch)

    watch(
      () => value.value,
      () => emit('selectedTheme', value.value)
    )

    return { value }
  }
}
</script>

<style scoped></style>

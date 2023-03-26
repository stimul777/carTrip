<template>
  <div>
    <v-switch
      v-model="value"
      :append-icon="appendIcon"
      :prepend-icon="prependIcon"
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
    },
    appendIcon: {
      type: String,
      default: ''
    },
    prependIcon: {
      type: String,
      default: ''
    }
  },

  emits: ['selectedSwitch'],

  setup(props, { emit }) {
    const value: Ref<Boolean> = ref(props.isSwitch)

    watch(
      () => value.value,
      () => emit('selectedSwitch', value.value)
    )

    return { value }
  }
}
</script>

<style scoped></style>

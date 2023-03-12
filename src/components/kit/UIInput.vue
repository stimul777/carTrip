<template>
  <v-text-field v-model="value" :label="label" :hint="hint" class="input"></v-text-field>
</template>

<script lang="ts">
import { computed } from 'vue'

export default {
  name: 'UIAutocomplete',

  model: {
    prop: 'modelValue',
    event: 'update:modelValue'
  },

  props: {
    label: {
      type: String,
      default: 'Значение'
    },
    hint: {
      type: String,
      default: 'Значение'
    },
    modelValue: {
      type: Number,
      default: 0
    }
  },

  setup(props) {
    const value = computed(() => {
      return props.modelValue
    })
    return { value }
  }
}
</script>

<style scoped>
.input {
  height: 20px;
  width: 220px;
}
</style>

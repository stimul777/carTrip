<template>
  <v-autocomplete
    v-model.lazy="value"
    v-model:search="search"
    :label="label"
    :items="items"
    :loading="isLoading"
    :disabled="isDisabled"
    density="comfortable"
    class="autocomplete"
  >
  </v-autocomplete>
</template>

<script lang="ts">
import { ref, Ref, watch } from 'vue'

export default {
  name: 'UIAutocomplete',
  props: {
    label: {
      type: String,
      default: 'Значение'
    },
    items: {
      type: Array,
      default: () => []
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  },

  emits: ['updateValue', 'search'],

  setup(props, { emit }) {
    const value: Ref<string> = ref('')
    const search: Ref<string> = ref('')

    watch(value, () => {
      emit('updateValue', search.value)
    })

    watch(search, () => {
      emit('search', search.value)
    })
    return { value, search }
  }
}
</script>

<style scoped>
.autocomplete {
  height: 20px;
  width: 220px;
}
</style>

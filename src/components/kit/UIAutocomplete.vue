<template>
  <v-autocomplete :label="label" :items="items" :loading="true" class="autocomplete" />
</template>

<script lang="ts">
export default {
  name: 'UIAutocomplete',
  props: {
    label: {
      type: String,
      default: 'Значение'
    },
    items: {
      type: Array,
      default: () => ['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']
    }
  },

  setup(props) {
    return {}
  }
}
</script>

<style scoped>
.autocomplete {
  height: 20px;
  width: 220px;
}
</style>

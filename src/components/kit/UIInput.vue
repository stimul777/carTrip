<template>
  <v-text-field :label="label" class="input"></v-text-field>
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
.input {
  height: 20px;
  width: 220px;
}
</style>

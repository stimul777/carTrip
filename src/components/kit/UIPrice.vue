<template>
  <v-chip class="chip" label>
    <v-icon start :icon="icon"></v-icon>
    {{ text + value + unit }}
  </v-chip>
</template>

<script lang="ts">
export default {
  name: 'PriceField',
  props: {
    text: {
      type: String,
      default: () => ''
    },

    value: {
      type: Number,
      default: () => 0
    },
    icon: {
      type: String,
      default: () => ''
    },
    unit: {
      type: String,
      default: () => 'Р'
    }
  }
}
</script>

<style scoped>
.chip {
  color: white;
}
</style>

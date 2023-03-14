<template>
  <v-chip class="ma-2" label text-color="white">
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

<style scoped></style>

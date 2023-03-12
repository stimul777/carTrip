<template>
  <v-chip class="ma-2" label text-color="white">
    <v-icon start icon="mdi-currency-rub"></v-icon>
    {{ 'Цена поездки ' + value + ' P' }}
  </v-chip>
</template>

<script lang="ts">
export default {
  name: 'PriceField',
  props: {
    value: {
      type: Number,
      default: () => 0
    }
  }
}
</script>

<style scoped></style>

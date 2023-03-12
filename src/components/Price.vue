<template>
  <div>{{ 'Цена поездки ' + value + ' P' }}</div>
</template>

<script lang="ts">
import { ref, Ref, watch } from 'vue'

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

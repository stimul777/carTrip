<template>
  <v-progress-circular indeterminate class="progress-circular" size="80"></v-progress-circular>
</template>

<script lang="ts">
export default {
  props: {},

  setup(props) {
    const items = ['foo', 'bar', 'fizz', 'buzz']
    const values = 'foo'
    const value = null

    return {
      items,
      values,
      value
    }
  }
}
</script>

<style scoped>
/* .distance-calculator-container {
  width: 300px;
} */
</style>

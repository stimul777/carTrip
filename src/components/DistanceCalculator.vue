<template>
  <div>
    <v-text-field label="Main input" hide-details="auto" color="'red'"></v-text-field>
  </div>
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

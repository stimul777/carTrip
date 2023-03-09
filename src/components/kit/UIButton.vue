<template>
  <v-btn variant="outlined"> {{ label }} </v-btn>
</template>

<script lang="ts">
export default {
  name: 'UIButton',
  props: {
    label: {
      type: String,
      default: 'Button'
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

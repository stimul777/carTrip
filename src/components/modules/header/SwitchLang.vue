<template>
  <div class="language">
    <p>Ru</p>
    <v-switch density="compact"></v-switch>
    <p>Eng</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SwitchLang',

  setup(props) {}
}
</script>

<style scoped>
.language {
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
}

.switch {
  /* border: 1px solid red; */
}
</style>

<template>
  <div class="greetings">
    <div class="header">
      <h1 class="green">Calc</h1>
      <p>Ru</p>
    </div>
    <h3>
      Калькулятор
      <!-- <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next? -->
    </h3>
  </div>
</template>

<script setup lang="ts">
// defineProps<{
//   // msg: string
// }>()
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
  border: 1px solid red;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

/* @media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
} */
</style>

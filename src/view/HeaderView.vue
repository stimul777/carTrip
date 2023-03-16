<template>
  <header>
    <div class="greetings">
      <div class="header">
        <h1 class="green">Calculator</h1>
        <p>Ru</p>
      </div>
      <h3>Калькулятор</h3>
    </div>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Калькулятор расстояния</RouterLink>
        <RouterLink to="/expense">Калькулятор расхода</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import YandexMap from '@/components/YandexMap.vue'
</script>

<style scoped>
.content {
  display: flex;
  /* width: 100%; */
  border: 1px solid green;
}

.content-wrapper {
  border: 1px solid red;
}

.map-wrapper {
  width: 600px;
  height: 400px;
  border: 1px solid red;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

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
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>

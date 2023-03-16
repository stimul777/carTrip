<template>
  <section class="content">
    <section class="content-wrapper">
      <HeaderView />
      <YandexMap class="map-wrapper" />
    </section>
    <v-card class="card" :title="routeTitle" subtitle="222">
      <v-container class="route-container">
        <RouterView />
      </v-container>
    </v-card>
  </section>
</template>

<script lang="ts">
import { computed } from 'vue'
import { RouterView, useRouter, useRoute } from 'vue-router'
import HeaderView from './view/HeaderView.vue'
import YandexMap from '@/components/YandexMap.vue'

export default {
  components: {
    HeaderView,
    YandexMap
  },
  props: {},

  setup(props) {
    const route = useRoute()

    const routeTitle = computed(() => {
      return route.name === 'distanceCalculator' ? 'Расстояние' : 'Расход'
    })
    return { routeTitle }
  }
}
</script>

<style scoped>
.route-container {
  /* background-color: black; */
}
.card {
  background-color: var(--color-background);
  /* z-index: -22; */
}

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

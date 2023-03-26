<template>
  <section class="app-wrapper" :class="[onTheme ? 'day-theme' : 'night-theme']">
    <section class="content">
      <section class="content-wrapper">
        <HeaderView :onTheme="onTheme" @selectedTheme="theme.setTheme($event)" />
        <YandexMap class="map-wrapper" />
        <div class="footer-icons">
          <v-icon>mdi-vuejs</v-icon>
          <v-icon> mdi-vuetify</v-icon>
        </div>
      </section>
      <v-card class="card" :title="routeTitle">
        <v-container class="route-container">
          <RouterView />
        </v-container>
      </v-card>
    </section>
  </section>
</template>

<script lang="ts">
import { computed, onMounted } from 'vue'
import { RouterView, useRouter, useRoute } from 'vue-router'
import HeaderView from './view/HeaderView.vue'
import YandexMap from '@/components/YandexMap.vue'
import useThemeStore from '@/stores/theme.store'

export default {
  name: 'App',
  components: {
    HeaderView,
    YandexMap
  },
  props: {},

  setup(props) {
    const route = useRoute()
    const theme = useThemeStore()

    const routeTitle = computed(() => {
      return route.name === 'distanceCalculator' ? 'Расстояние' : 'Расход'
    })

    const onTheme = computed(() => theme.getTheme)

    return { routeTitle, theme, onTheme }
  }
}
</script>

<style scoped>
.app-wrapper {
  /* max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal; */
  /* display: flex; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
  width: 100%;
  height: 100vh;
  font-weight: normal;
  overflow: none;
}

.route-container {
  /* background-color: black; */
}
.card {
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid red;
  /* z-index: -22; */
}

/* .v-card-title {
  color: red !important;
} */

.content {
  display: flex;
  justify-content: space-between;
  /* margin: 0 auto; */
  max-width: 70%;
  max-height: 590px;
  border: 1px solid #2c2c2c2a;
  border-radius: 10px;
  background-color: #e6e2e28a;
  padding: 10px;
  /* padding: 2rem; */
}

.content-wrapper {
  border: 1px solid rgba(0, 0, 0, 0.301);
  border-radius: 6px;
}

.map-wrapper {
  width: 600px;
  height: 400px;
  border: 1px solid red;
}

.footer-icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
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

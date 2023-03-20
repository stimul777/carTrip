<template>
  <header>
    <div class="greetings">
      <div class="header">
        <SwitchLang />
        <h1 class="green">Calculator</h1>
        <SwitchThemes @selectedTheme="selectedTheme" />
      </div>
    </div>
    <div class="wrapper-nav">
      <nav class="nav">
        <RouterLink class="nav-item" to="/">Калькулятор расстояния</RouterLink>
        <RouterLink to="/expense">Калькулятор расхода</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SwitchLang from '@/components/modules/header/SwitchLang.vue'
import SwitchThemes from '@/components/modules/header/SwitchThemes.vue'

export default {
  name: 'HeaderView',

  components: {
    SwitchLang,
    SwitchThemes
  },
  // props: {},

  setup(props) {
    const selectedTheme = (event: string) => {
      console.log(event)
    }

    return {
      selectedTheme
    }
  }
}
</script>

<style scoped>
.control-settings {
  display: flex;
}
.language {
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin: 0 20px 0 0; */
  /* border: 1px solid red; */
}

.switch {
  /* border: 1px solid red; */
  /* margin: 0;
  padding: 0; */
}

.time-of-day {
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
}

.wrapper-nav {
  display: flex;
  align-items: center;
  /* width: 100%; */
  /* border: 1px solid green; */
}

.nav {
  /* display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid pink; */
}

.content-wrapper {
  /* border: 1px solid red; */
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  font-size: 14px;
  /* text-align: center;
  margin-bottom: 1rem; */
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
  /* border: 1px solid red; */
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

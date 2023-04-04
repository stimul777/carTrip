<template>
  <div class="wrapper-nav">
    <nav class="nav">
      <RouterLink class="nav-item" to="/">{{ t('distanceCalc') }}</RouterLink>
      <RouterLink to="/expense">{{ t('ExpenseCalc') }}</RouterLink>
    </nav>
  </div>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

export default {
  name: 'NavHeader',

  props: {
    onTheme: {
      type: Boolean
    }
  },

  setup(props, { emit }) {
    const { t } = useI18n()

    const selectedTheme = ($event: boolean) => {
      emit('selectedTheme', $event)
    }

    return {
      selectedTheme,
      t
    }
  }
}
</script>

<style scoped>
.onSwitch {
  color: var(--color-g-bg-fill-6);
}

.offSwitch {
  color: white;
}

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
  /* display: flex;
  align-items: center; */
  /* width: 100%; */
  /* border: 1px solid green; */
}

.nav {
  /* display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid pink; */
}

.nav-item {
  color: red;
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

/* @media (min-width: 1024px) {

} */
</style>

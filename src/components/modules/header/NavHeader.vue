<template>
  <div class="wrapper-nav">
    <nav class="nav">
      <RouterLink to="/">{{ t('distanceCalc') }}</RouterLink>
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
.active {
  color: red;
}

.active-class {
  color: red;
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
  /* color: var(--green-moss); */
  font-size: 17px;
  font-weight: bold;
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
</style>

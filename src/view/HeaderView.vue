<template>
  <header>
    <SettingsHeader :onTheme="onTheme" @selectedTheme="selectedTheme($event)" />
    <NavHeader />
  </header>
</template>

<script lang="ts">
import { computed } from 'vue'
import SettingsHeader from '@/components/modules/header/SettingsHeader.vue'
import NavHeader from '@/components/modules/header/NavHeader.vue'

export default {
  name: 'HeaderView',

  components: {
    SettingsHeader,
    NavHeader
  },
  props: {
    onTheme: {
      type: Boolean
    }
  },

  setup(props, { emit }) {
    const selectedTheme = ($event: boolean) => {
      emit('selectedTheme', $event)
    }

    return {
      selectedTheme
    }
  }
}
</script>

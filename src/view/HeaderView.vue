<template>
  <header>
    <SettingsHeader
      :onTheme="onTheme"
      :onLang="onLang"
      @selectedTheme="$emit('selectedTheme', $event)"
      @selectedLang="$emit('selectedLang', $event)"
    />
    <NavHeader />
  </header>
</template>

<script lang="ts">
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
    },
    onLang: {
      type: Boolean
    }
  }
}
</script>

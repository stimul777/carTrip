<template>
  <div class="greetings">
    <div class="header">
      <!-- Язык -->
      <UISwitch
        :isSwitch="onLang"
        :class="[colorSwitch ? 'onSwitch' : 'offSwitch']"
        @selectedSwitch="selectedLang($event)"
        appendIcon="mdi-translate"
        prependIcon="mdi-translate-off"
      />
      <h1 class="header-h1">{{ t('header') }}</h1>
      <!-- Тема: день/ночь -->
      <UISwitch
        :isSwitch="onTheme"
        :class="[colorSwitch ? 'onSwitch' : 'offSwitch']"
        @selectedSwitch="selectedTheme($event)"
        appendIcon="mdi-white-balance-sunny"
        prependIcon="mdi-weather-night"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, watch, computed } from 'vue'
import type { Ref } from 'vue'
import UISwitch from '@/components/kit/UISwitch.vue'
import { useI18n } from 'vue-i18n'

export default {
  name: 'SettingsHeader',

  components: { UISwitch },

  props: {
    onTheme: {
      type: Boolean
    },
    onLang: {
      type: Boolean
    }
  },

  setup(props, { emit }) {
    const { t } = useI18n()

    const colorSwitch = computed(() => props.onTheme)

    const selectedTheme = ($event: boolean) => {
      emit('selectedTheme', $event)
    }

    const selectedLang = ($event: boolean) => {
      emit('selectedLang', $event)
    }

    return {
      t,
      selectedTheme,
      selectedLang,
      colorSwitch
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
  /* border: 1px solid red; */
}

.header-h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
  color: hsla(160, 100%, 37%, 1);
}

.onSwitch {
  color: var(--color-g-bg-fill-6);
}

.offSwitch {
  color: white;
}

/* @media (min-width: 1024px) {

} */
</style>

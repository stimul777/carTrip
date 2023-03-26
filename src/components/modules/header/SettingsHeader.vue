<template>
  <div class="greetings">
    <div class="header">
      <!-- Язык -->
      <UISwitch
        appendIcon="mdi-translate"
        prependIcon="mdi-translate-off"
        :class="[colorSwitch ? 'onSwitch' : 'offSwitch']"
        :style="{ color: colorSwitch }"
        @selectedSwitch="$emit('selectedLocale', $event)"
      />
      <h1 class="header-h1">{{ t('header') }}</h1>
      <!-- Тема: день/ночь -->
      <UISwitch
        appendIcon="mdi-white-balance-sunny"
        prependIcon="mdi-weather-night"
        :class="[colorSwitch ? 'onSwitch' : 'offSwitch']"
        :isSwitch="onTheme"
        @selectedSwitch="selectedTheme($event)"
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
    }
  },

  setup(props, { emit }) {
    const { t } = useI18n()

    const colorSwitch = computed(() => props.onTheme)

    const selectedTheme = ($event: boolean) => {
      emit('selectedTheme', $event)
    }

    return {
      selectedTheme,
      colorSwitch,
      t
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

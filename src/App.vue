<template>
  <section class="app-wrapper" :class="[onTheme ? 'day-theme' : 'night-theme']">
    <section class="content">
      <v-card class="card" :style="themeStyle">
        <HeaderView
          :onTheme="onTheme"
          :onLang="onLang"
          @selectedTheme="theme.setTheme($event)"
          @selectedLang="lang.setLang($event)"
        />
        <YandexMap class="map-wrapper" />
        <div class="footer-icons">
          <v-icon>mdi-vuejs</v-icon>
          <v-icon> mdi-vuetify</v-icon>
        </div>
      </v-card>
      <v-card class="card" :style="themeStyle" :title="routeTitle">
        <v-container>
          <RouterView :onTheme="onTheme" />
        </v-container>
      </v-card>
    </section>
  </section>
</template>

<script lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import HeaderView from './view/HeaderView.vue'
import YandexMap from '@/components/YandexMap.vue'
import useThemeStore from '@/stores/theme.store'
import useLocalization from '@/stores/localization.store'

export default {
  name: 'App',
  components: {
    HeaderView,
    YandexMap
  },
  props: {},

  setup(props) {
    const { t } = useI18n()
    const route = useRoute()
    const theme = useThemeStore()
    const lang = useLocalization()

    const routeTitle = computed(() => {
      return route.name === 'distanceCalculator'
        ? t('calcDistance.header')
        : t('calcExpense.header')
    })

    const onTheme = computed(() => theme.getTheme)
    const onLang = computed(() => lang.getLang)
    const themeStyle = computed(() => {
      return {
        color: theme.isDayOrNight ? 'rgb(34, 34, 34)' : 'rgb(255, 255, 255)'
      }
    })

    return {
      routeTitle,
      theme,
      onTheme,
      onLang,
      lang,
      themeStyle,
      t
    }
  }
}
</script>

<style scoped>
.app-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}

.card {
  background-color: rgba(0, 0, 0, 0);
}

.content {
  display: flex;
  justify-content: space-between;
  min-width: 980px;
  border-radius: 10px;
  background-color: #e6e2e28a;
  padding: 10px;
}

.content-wrapper-map {
  border-radius: 6px;
}

.map-wrapper {
  width: 600px;
  height: 400px;
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
</style>

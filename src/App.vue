<template>
  <section class="app-wrapper" :class="[onTheme ? 'day-theme' : 'night-theme']">
    <section class="content">
      <section class="content-wrapper">
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
      </section>
      <v-card :class="['card']" :style="themeStyle" :title="routeTitle">
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
    const { t, locale } = useI18n()
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
    const textColor = computed(() => (theme.isDayOrNight ? 'theme-day' : 'theme-night'))
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
      textColor,
      themeStyle,
      t
    }
  }
}
</script>

<style scoped>
.theme-day {
  color: var(--cyanide-sea-wave);
  /* z-index: 999; */
}

.theme-night {
  color: var(--dark-blue);
}

.route-container {
  /* z-index: 99999; */
}

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

.card {
  background-color: rgba(0, 0, 0, 0);
  /* border: 1px solid red; */
  /* z-index: -1; */
}

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
</style>

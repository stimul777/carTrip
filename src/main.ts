import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import { useI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'
import './assets/main.css'

// vuetify
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi'
  }
})

//Languages
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      greeting: 'Hello World!',
      header: 'Calculator'
    },
    ru: {
      greeting: 'Привет мир!',
      header: 'Калькулятор'
    }
  }
})

app.use(createPinia())
app.use(i18n)
app.use(router)
app.use(vuetify)

app.mount('#app')

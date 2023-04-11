import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import messages from '@/languages/mainLang'

import App from './App.vue'
import router from './router'
import './assets/main.css'

// vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

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
  messages: messages
})

app.use(createPinia())
app.use(i18n)
app.use(router)
app.use(vuetify)

app.mount('#app')

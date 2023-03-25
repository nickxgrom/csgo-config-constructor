import { createApp } from 'vue'
const app = createApp(App)
import App from './App.vue'
import './styles/style.scss'

import { createPinia } from 'pinia'
import router from './router'

import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'

import { createI18n } from 'vue-i18n'
import ru from '@/locales/ru.js'
import en from '@/locales/en.js'

const pinia = createPinia()
const i18n = createI18n({
    legacy: false,
    messages: {
        'en-US': en,
        'ru-RU': ru
    }
})

app.use(pinia)
app.use(router)
app.use(mdiVue, { icons: mdijs })
app.use(i18n)

app.component('$router', router)

app.mount('#app')

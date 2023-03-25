import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './styles/style.scss'
import App from './App.vue'

import mdiVue from "mdi-vue/v3";
import * as mdijs from '@mdi/js'

import router from './router'
const pinia = createPinia()
const app = createApp(App)

import {createI18n} from "vue-i18n";
import ru from "@/locales/ru.js";
import en from "@/locales/en.js";

app.use(mdiVue, {
    icons: mdijs
})
app.component('$router', router)

app.use(router).use(pinia)

const i18n = createI18n({
    legacy: false,
    messages: {
        'en-US': en,
        'ru-RU': ru
    }
})

app.use(i18n)

app.mount('#app')

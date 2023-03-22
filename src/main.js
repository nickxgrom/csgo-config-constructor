import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.scss'
import App from './App.vue'

import mdiVue from "mdi-vue/v3";
import * as mdijs from '@mdi/js'

import router from './router'

const pinia = createPinia()
const app = createApp(App)

app.use(mdiVue, {
    icons: mdijs
})
app.component('$router', router)

app.use(router).use(pinia)

app.mount('#app')

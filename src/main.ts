import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import {fas} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons"

import App from './App.vue'
import router from './router'

import './assets/main.css'

library.add(fas, fab)

const app = createApp(App)

.component('fa', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
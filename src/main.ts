import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faHeart, faGripLinesVertical } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import App from './App.vue'
import router from './router'

import './assets/main.css'

library.add(faEnvelope, faHeart, faGripLinesVertical, faGithub, faLinkedin)

const app = createApp(App)

.component('fa', FontAwesomeIcon)

app.use(createPinia())
app.use(router)
// eslint-disable-next-line vue/multi-word-component-names

app.mount('#app')
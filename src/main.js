import '@/styles/reset.css'
import '@/styles/variables.css'
import '@/styles/index.scss'
import 'uno.css'

import { createApp } from 'vue'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import App from './App.vue'
import config from "./assets/js/config"

function setupApp() {
  const app = createApp(App)
  app.config.globalProperties.$config =config;
  setupStore(app)

  setupRouter(app)

  app.mount('#app')
}

setupApp()

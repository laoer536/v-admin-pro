import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

createApp(App).use(router).use(createPinia().use(piniaPluginPersistedstate)).mount('#app')

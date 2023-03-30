import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createI18n } from 'vue-i18n'
const i18n = createI18n({
  locale: 'zh',
})
const pinia = createPinia().use(piniaPluginPersistedstate)

createApp(App).use(router).use(i18n).use(pinia).mount('#app')

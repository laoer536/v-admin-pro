import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'app',
  setup() {
    const { t } = useI18n()
    return () => <div>{t('login.hello')}</div>
  },
})

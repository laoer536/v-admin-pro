import { useI18n } from 'vue-i18n'
export function useLangScope() {
  const { t } = useI18n({
    inheritLocale: true,
    useScope: 'local',
  })
  return { t }
}

<template>
  <div>
    <button class="btn-primary btn" @click="router.push('/login')">{{ t('jump') }}</button>
  </div>
</template>

<script setup lang="ts">
import { useLangScope } from '@hooks/i18n'
const { t } = useLangScope()
const router = useRouter()
</script>

<i18n lang="yaml">
zh:
  jump: '跳转'
en:
  jump: 'jump'
</i18n>

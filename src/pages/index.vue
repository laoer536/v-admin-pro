<template>
  <div>
    <button class="btn-primary btn" @click="router.push('/login')">{{ t('index.jump') }}</button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const router = useRouter()
</script>

<template>
  <div>{{ t('hello') }}-{{ t('test') }}</div>
</template>

<script setup lang="ts">
import { useLangScope } from '@hooks/i18n'
const { t } = useLangScope()
</script>

<i18n lang="yaml">
zh:
  hello: '你好世界！'
  test: '测试'
en:
  hello: 'Hello World!'
  test: 'test'
</i18n>

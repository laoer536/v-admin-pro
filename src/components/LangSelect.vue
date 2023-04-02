<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
</script>
<template>
  <select v-model="locale" class="select select-xs">
    <option value="zh">中文</option>
    <option value="en">English</option>
  </select>
</template>

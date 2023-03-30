<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
</script>
<template>
  <select v-model="locale" class="select mb-6">
    <option value="zh">zh</option>
    <option value="en">en</option>
  </select>
</template>

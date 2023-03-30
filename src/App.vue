<script setup lang="ts">
import LangSelect from '@components/LangSelect.vue'
</script>

<template>
  <div class="page text-center p-4">
    <LangSelect />
    <router-view />
  </div>
</template>

<style scoped></style>

<template>
  <div class="h-full">
    <PageAside />
    <PageHeader class="hidden md:flex" />
    <div class="px-4 py-16 md:pb-16 md:pl-[368px] md:pr-12 md:pt-[120px]">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@components/PageHeader.vue'
import PageAside from '@components/PageAside/index.vue'
</script>

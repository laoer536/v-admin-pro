<template>
  <div class="h-full">
    <PageAside />
    <PageHeader class="hidden md:flex" />
    <div class="py-16 px-4 md:pl-[368px] md:pt-[120px] md:pr-12 md:pb-16">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@components/PageHeader.vue'
import PageAside from '@components/PageAside/index.vue'
</script>

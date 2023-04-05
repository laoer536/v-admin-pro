<template>
  <div class="h-full">
    <div class="fixed left-0 top-0 h-full z-10"><PageAside /></div>
    <div class="fixed left-0 top-0 w-full"><PageHeader /></div>
    <div class="pl-[368px] pt-[120px] pr-12 pb-16">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import PageHeader from '@components/PageHeader.vue'
import PageAside from '@components/PageAside.vue'
</script>

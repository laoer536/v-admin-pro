<template>
  <div class="h-full flex flex-grow">
    <div><PageAside /></div>
    <div class="flex-1 overflow-y-auto">
      <PageHeader />
      <div class="pl-12 pt-12 pr-12 pb-16 bg-info h-full">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageHeader from '@components/PageHeader.vue'
import PageAside from '@components/PageAside.vue'
const { t } = useI18n()
const router = useRouter()
</script>

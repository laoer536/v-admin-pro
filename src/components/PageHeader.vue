<template>
  <header class="fixed left-0 top-0 z-[49] flex w-full min-w-fit items-center justify-end bg-base-200 px-14 py-8">
    <div class="e-after-round avatar relative mr-16 after:content-['12']">
      <div class="w-14 rounded-full bg-primary-content p-4">
        <BellIcon />
      </div>
    </div>
    <div class="mr-8">
      <div class="text-base">
        Hello,
        <span class="font-bold">laoer536</span>
      </div>
      <div class="mt-1 text-xs text-gray-400">Super Admin</div>
    </div>
    <div class="online avatar mr-4">
      <div class="w-14 rounded-full">
        <img src="/me.png" alt="" />
      </div>
    </div>
    <div class="avatar">
      <div class="w-14 rounded-full bg-accent p-4">
        <Cog6ToothIcon class="h-6 w-6 text-primary-content" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Cog6ToothIcon, BellIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped></style>

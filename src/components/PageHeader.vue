<template>
  <header class="py-8 px-14 flex justify-end items-center bg-base-200 min-w-fit">
    <div class="relative avatar mr-16 e-after-round after:content-['12']">
      <div class="w-14 p-4 rounded-full bg-primary-content">
        <BellIcon />
      </div>
    </div>
    <div class="mr-8">
      <div class="text-base">
        Hello,
        <span class="font-bold">laoer536</span>
      </div>
      <div class="text-xs text-gray-400 mt-1">Super Admin</div>
    </div>
    <div class="avatar online mr-4">
      <div class="w-14 rounded-full">
        <img src="/me.png" alt="" />
      </div>
    </div>
    <div class="avatar">
      <div class="p-4 w-14 rounded-full bg-accent">
        <Cog6ToothIcon class="w-6 h-6 text-primary-content" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Cog6ToothIcon, BellIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped></style>

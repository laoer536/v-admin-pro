<template>
  <div>
    <div class="md:hidden">
      <label class="btn btn-circle swap swap-rotate fixed left-0 top-0 z-50">
        <input type="checkbox" v-model="isFocus" />
        <svg
          class="swap-off fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>

        <!-- close icon -->
        <svg
          class="swap-on fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <polygon
            points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
          />
        </svg>
      </label>
      <div
        class="fixed w-fit pb-7 px-7 top-10 z-50 left-6 shadow scale-100 opacity-100 bg-base-100 rounded-box transition-all"
        :class="{ 'opacity-0 scale-75': !isFocus }"
      >
        <Aside />
      </div>
    </div>
    <Aside class="hidden md:block" />
  </div>
</template>

<script setup lang="ts">
import Aside from '@components/PageAside/Aside.vue'
const isFocus = ref(false)
</script>

<style scoped></style>

<template>
  <div>
    <button class="btn-primary btn" @click="router.push('/login')">跳转到登陆页面</button>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
</script>

<style scoped></style>

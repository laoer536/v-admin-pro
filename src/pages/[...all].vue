<template>
  <div></div>
</template>

<script setup lang="ts">
const route = useRoute()
const router = useRouter()
if (route.path === '/') {
  router.replace('/admin/dashboard')
} else {
  router.replace('/admin/404')
}
</script>

<style scoped></style>

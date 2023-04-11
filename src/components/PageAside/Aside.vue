<template>
  <aside class="h-full pt-7 md:fixed md:left-0 md:top-0 md:z-50 md:w-80">
    <div class="flex items-center justify-center">
      <img class="h-12 w-12 md:mr-6" src="/logo.svg" alt="" />
      <div class="hidden md:flex md:flex-col">
        <span class="text-2xl font-bold">Logo Name</span>
        <span class="text-md text-gray-400">Admin Name</span>
      </div>
    </div>
    <div class="mt-4 flex flex-col space-y-2 md:mt-20">
      <div class="menu" v-for="item in menus" :key="item.name">
        <div v-if="item?.children?.length > 0" class="flex flex-col space-y-2">
          <router-link :to="item.path" class="father flex items-center justify-center gap-7 md:justify-start">
            <div class="flex-center ml-20 hidden h-20 w-20 rounded-full drop-shadow-lg transition-colors md:flex">
              <img class="h-7 w-7" src="/me.png" alt="" />
            </div>
            <span class="text-base-content/30">{{ item.name }}</span>
          </router-link>
          <div class="child flex h-0 flex-col items-center overflow-hidden md:items-stretch md:gap-4">
            <router-link v-for="child in item.children" :key="child.name" :to="child?.path">
              <span class="textarea-lg text-base-content/30 md:ml-44">{{ child.name }}</span>
            </router-link>
          </div>
        </div>
        <router-link v-else :to="item?.path" class="flex items-center justify-center gap-7 md:justify-start">
          <div class="flex-center ml-20 hidden h-20 w-20 rounded-full drop-shadow-lg transition-colors md:flex">
            <img class="h-7 w-7" src="/me.png" alt="" />
          </div>
          <span class="text-lg text-base-content/30">{{ item.name }}</span>
        </router-link>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
interface MenuItem {
  name: string
  icon?: string
  path?: string
  children?: MenuItem[]
}
type Menus = MenuItem[]
const menus: Menus = [
  { name: 'Dashboard', icon: '', path: '/admin/dashboard' },
  {
    name: 'Components',
    icon: '',
    path: '/admin/component',
    children: [
      { name: 'Table', path: '/admin/component/table' },
      { name: 'Form', path: '/admin/component/form' },
    ],
  },
  { name: 'About', icon: '', path: '/admin/about' },
]
</script>

<style scoped>
.router-link-active span {
  @apply font-bold text-base-content;
}
.router-link-active > div {
  @apply scale-100 bg-info;
}
.child {
  transition: height 0.3s cubic-bezier(0.08, 0.82, 0.17, 1);
}
.router-link-active.father ~ .child {
  @apply h-[72px];
}

@screen md {
  .router-link-active.father ~ .child {
    @apply h-[88px];
  }
}
</style>

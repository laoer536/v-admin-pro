<template>
  <aside class="w-80 pt-7">
    <div class="flex items-center justify-center">
      <img class="w-12 h-12 mr-6" src="/logo.svg" alt="" />
      <div class="flex flex-col">
        <span class="text-2xl font-bold">Logo Name</span>
        <span class="text-gray-400 text-md">Admin Name</span>
      </div>
    </div>
    <div class="flex flex-col space-y-2 mt-20">
      <div class="menu" v-for="item in menus" :key="item.name">
        <div v-if="item?.children?.length > 0" class="flex flex-col space-y-2">
          <router-link :to="item.path" class="flex items-center gap-7 father">
            <div class="ml-20 flex-center w-20 h-20 rounded-full drop-shadow-lg transition-colors">
              <img class="w-7 h-7" src="/me.png" alt="" />
            </div>
            <span class="text-base-content/30">{{ item.name }}</span>
          </router-link>
          <div class="flex flex-col gap-4 h-0 overflow-hidden child">
            <router-link v-for="child in item.children" :key="child.name" :to="child?.path">
              <span class="ml-44 textarea-lg text-base-content/30">{{ child.name }}</span>
            </router-link>
          </div>
        </div>
        <router-link v-else :to="item?.path" class="flex items-center gap-7">
          <div class="ml-20 flex-center w-20 h-20 rounded-full drop-shadow-lg transition-colors">
            <img class="w-7 h-7" src="/me.png" alt="" />
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
  @apply bg-info scale-100;
}
.child {
  transition: height 0.3s cubic-bezier(0.08, 0.82, 0.17, 1);
}
.router-link-active.father ~ .child {
  @apply h-[88px];
}
</style>

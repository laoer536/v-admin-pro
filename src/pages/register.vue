<template>
  <div class="flex h-full md:flex-none">
    <div class="relative hidden md:block md:flex-1">
      <div class="absolute left-8 top-4 hidden text-lg md:block">{{ t('login.logoText') }}</div>
      <img :src="img" class="h-full w-full object-contain" alt="" />
    </div>
    <div class="min-w-full px-6 py-6 md:min-w-[512px] md:px-12">
      <div class="flex items-center justify-between">
        <div class="text-lg md:hidden">{{ t('login.logoText') }}</div>
        <LangSelect />
      </div>
      <div class="mt-12 text-3xl font-medium">{{ t('login.signUp') }}</div>
      <div class="mt-1.5 text-base">{{ t('login.registerTipText[0]') }}</div>
      <div class="text-base">
        <span>{{ t('login.registerTipText[1]') }}</span>
        <a href="/login" target="_self" class="text-error">{{ t('login.registerTipText[2]') }}</a>
      </div>
      <!--    <div>{{ t('login.registerForm') }}</div>-->
      <div class="form-control mt-6 w-full">
        <label class="label">
          <span class="label-text">{{ t('login.registerForm[0].name') }}</span>
        </label>
        <input type="text" :placeholder="t('login.registerForm[0].placeholder')" class="input-bordered input w-full" />
        <label class="label mt-4">
          <span class="label-text">{{ t('login.registerForm[1].name') }}</span>
        </label>
        <input
          type="password"
          :placeholder="t('login.registerForm[1].placeholder')"
          class="input-bordered input w-full"
        />
        <label class="label mt-4">
          <span class="label-text">{{ t('login.registerForm[2].name') }}</span>
        </label>
        <input
          type="password"
          :placeholder="t('login.registerForm[2].placeholder')"
          class="input-bordered input w-full"
        />
      </div>
      <div class="mt-10 text-center">
        <button class="btn-error btn-wide btn rounded-full text-white" @click="router.push('/login')">
          {{ t('login.register') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import img from '@assets/images/laoer536-blog-home.svg'
import LangSelect from '@components/LangSelect.vue'
const { t } = useI18n()
const router = useRouter()
</script>

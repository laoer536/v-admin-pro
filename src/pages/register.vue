<template>
  <div class="flex h-full md:flex-none">
    <div class="relative hidden md:flex-1 md:block">
      <div class="absolute left-8 top-4 text-lg hidden md:block">{{ t('login.logoText') }}</div>
      <img :src="img" class="w-full h-full object-contain" alt="" />
    </div>
    <div class="py-6 px-6 min-w-full md:px-12 md:min-w-[512px]">
      <div class="flex justify-between items-center">
        <div class="text-lg md:hidden">{{ t('login.logoText') }}</div>
        <LangSelect />
      </div>
      <div class="mt-12 font-medium text-3xl">{{ t('login.signUp') }}</div>
      <div class="text-base mt-1.5">{{ t('login.registerTipText[0]') }}</div>
      <div class="text-base">
        <span>{{ t('login.registerTipText[1]') }}</span>
        <a href="/login" target="_self" class="text-error">{{ t('login.registerTipText[2]') }}</a>
      </div>
      <!--    <div>{{ t('login.registerForm') }}</div>-->
      <div class="form-control w-full mt-6">
        <label class="label">
          <span class="label-text">{{ t('login.registerForm[0].name') }}</span>
        </label>
        <input type="text" :placeholder="t('login.registerForm[0].placeholder')" class="input input-bordered w-full" />
        <label class="label mt-4">
          <span class="label-text">{{ t('login.registerForm[1].name') }}</span>
        </label>
        <input
          type="password"
          :placeholder="t('login.registerForm[1].placeholder')"
          class="input input-bordered w-full"
        />
        <label class="label mt-4">
          <span class="label-text">{{ t('login.registerForm[2].name') }}</span>
        </label>
        <input
          type="password"
          :placeholder="t('login.registerForm[2].placeholder')"
          class="input input-bordered w-full"
        />
      </div>
      <div class="text-center mt-10">
        <button class="btn btn-wide btn-error rounded-full text-white" @click="router.push('/login')">
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

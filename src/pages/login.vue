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
      <div class="mt-12 text-3xl font-medium">{{ t('login.signIn') }}</div>
      <div class="mt-1.5 text-base">{{ t('login.loginTipText[0]') }}</div>
      <div class="text-base">
        <span>{{ t('login.loginTipText[1]') }}</span>
        <span @click="router.push('/register')" class="text-error">{{ $t('login.loginTipText[2]') }}</span>
      </div>
      <!--    <div>{{ t('login.form') }}</div>-->
      <div class="form-control mt-6 w-full">
        <label class="label">
          <span class="label-text">{{ t('login.form[0].name') }}</span>
        </label>
        <input type="text" :placeholder="t('login.form[0].placeholder')" class="input-bordered input w-full" />
        <label class="label mt-4">
          <span class="label-text">{{ t('login.form[1].name') }}</span>
        </label>
        <input type="password" :placeholder="t('login.form[1].placeholder')" class="input-bordered input w-full" />
      </div>
      <div class="mt-1 flex items-center justify-between">
        <div class="form-control">
          <label class="label cursor-pointer">
            <input type="checkbox" checked class="checkbox checkbox-sm mr-2" />
            <span class="label-text text-xs">{{ t('login.remember') }}</span>
          </label>
        </div>
        <div class="text-xs">{{ t('login.forgot') }}</div>
      </div>
      <div class="mt-10 flex flex-col items-center gap-1">
        <button class="btn-error btn-wide btn rounded-full text-white" @click="router.push('/')">
          {{ t('login.login') }}
        </button>
        <div class="mt-5 text-base text-base-300 dark:text-slate-500">{{ t('login.otherWay') }}</div>
        <div class="mt-6 flex gap-4">
          <div v-for="(img, index) in loginWays" class="avatar" :key="index">
            <div class="w-7 rounded-full bg-white">
              <img :src="img" alt="login-way" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import qq from '@assets/images/QQ.svg'
import github from '@assets/images/github.svg'
import wechat from '@assets/images/wechat.svg'
import { useI18n } from 'vue-i18n'
import LangSelect from '@components/LangSelect.vue'
import img from '@assets/images/laoer536-blog-home.svg'
const { t } = useI18n()
const router = useRouter()
const loginWays = [github, wechat, qq]
</script>

<template>
  <div class="py-6 px-6">
    <div class="flex justify-between items-center">
      <div class="text-lg">{{ t('login.logoText') }}</div>
      <LangSelect />
    </div>
    <div class="mt-12 font-medium text-3xl">{{ t('login.signIn') }}</div>
    <div class="text-base mt-1.5">{{ t('login.loginTipText[0]') }}</div>
    <div class="text-base">
      <span>{{ t('login.loginTipText[1]') }}</span>
      <span class="text-error">{{ $t('login.loginTipText[2]') }}</span>
    </div>
    <!--    <div>{{ t('login.form') }}</div>-->
    <div class="form-control w-full mt-6">
      <label class="label">
        <span class="label-text">{{ t('login.form[0].name') }}</span>
      </label>
      <input type="text" :placeholder="t('login.form[0].placeholder')" class="input input-bordered w-full" />
      <label class="label mt-4">
        <span class="label-text">{{ t('login.form[1].name') }}</span>
      </label>
      <input type="password" :placeholder="t('login.form[1].placeholder')" class="input input-bordered w-full" />
    </div>
    <div class="flex justify-between items-center mt-1">
      <div class="form-control">
        <label class="label cursor-pointer">
          <input type="checkbox" checked="checked" class="checkbox checkbox-sm mr-2" />
          <span class="label-text text-xs">{{ t('login.remember') }}</span>
        </label>
      </div>
      <div class="text-xs">{{ t('login.forgot') }}</div>
    </div>
    <div class="flex flex-col items-center gap-1 mt-10">
      <button class="btn btn-wide btn-error rounded-full text-white">{{ t('login.login') }}</button>
      <div class="text-base text-base-300 dark:text-slate-500 mt-5">{{ t('login.otherWay') }}</div>
      <div class="flex mt-6 gap-4">
        <div v-for="(img, index) in loginWays" class="avatar" :key="index">
          <div class="w-7 rounded-full bg-white">
            <img :src="img" alt="login-way" />
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
const { t } = useI18n()
const loginWays = [github, wechat, qq]
</script>

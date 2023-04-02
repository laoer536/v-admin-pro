<template>
  <div class="py-6 px-6">
    <div class="flex justify-between items-center">
      <div class="text-lg">{{ t('login.logoText') }}</div>
      <LangSelect />
    </div>
    <div class="mt-12 font-medium text-3xl">{{ t('login.signIn') }}</div>
    <div class="text-base mt-1.5">{{ t('login.registerTipText[0]') }}</div>
    <div class="text-base">
      <span>{{ t('login.registerTipText[1]') }}</span>
      <span class="text-error">{{ t('login.registerTipText[2]') }}</span>
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
      <button class="btn btn-wide btn-error rounded-full text-white">{{ t('login.register') }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LangSelect from '@components/LangSelect.vue'
const { t } = useI18n()
</script>

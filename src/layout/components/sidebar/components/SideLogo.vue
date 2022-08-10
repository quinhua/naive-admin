<template>
  <router-link h-60 f-c-c to="/">
    <div class="logo" :style="{ backgroundImage: `url(${logo})`}"></div>
        <h2 v-show="!appStore.collapsed" ml-10 color-primary text-16 font-bold max-w-140 flex-shrink-0>
      {{ title }}
    </h2>
  </router-link>
</template>

<script setup>
import { useAppStore } from '@/store/modules/app'
import logo from "../../../../assets/icons/logo.svg"
const title = import.meta.env.VITE_APP_TITLE

const appStore = useAppStore()
</script>
<style>
</style>
<template>
  <header px-15 h-full flex items-center>
    <div flex items-center>
      <MenuCollapse />
      <BreadCrumb ml-15 />
    </div>
    <div ml-auto flex items-center>
      <FullScreen />
      <UserAvatar />
    </div>
  </header>
</template>

<script setup>
import BreadCrumb from './components/BreadCrumb.vue'
import MenuCollapse from './components/MenuCollapse.vue'
import FullScreen from './components/FullScreen.vue'
import UserAvatar from './components/UserAvatar.vue'
</script>

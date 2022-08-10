<template>
  <div class="cus-scroll h-full py-15 flex-col overflow-auto bg-cover loginbody">
    <div m-auto p-15 f-c-c min-w-345 rounded-10 card-shadow bg-white bg-opacity-60>
      <div w-380 hidden md:block px-20 py-35>
        <img :src="bgImg" w-full/>
      </div>

      <div w-320 flex-col px-20 py-35>
        <h5 f-c-c text-24 font-normal color="#6a6a6a">
          <div class="logo logor" :style="{ backgroundImage: `url(${logo})`}"></div>
          {{ $config.title }}
        </h5>
        <div mt-30>
          <n-input
            v-model:value="loginInfo.username"
            autofocus
            class="text-16 items-center h-50 pl-10"
            placeholder="admin"
            :maxlength="20"
          >
          </n-input>
        </div>
        <div mt-30>
          <n-input
            v-model:value="loginInfo.password"
            class="text-16 items-center h-50 pl-10"
            type="password"
            show-password-on="mousedown"
            placeholder="随便输"
            :maxlength="20"
            @keydown.enter="handleLogin"
          />
        </div>

        <div mt-20>
          <n-checkbox :checked="isRemember" label="记住我" :on-update:checked="(val) => (isRemember = val)" />
        </div>

        <div mt-20>
          <n-button w-full h-50 rounded-5 text-16 type="primary" :loading="loging" @click="handleLogin">登录</n-button>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script setup>
import { lStorage } from '@/utils/cache'
import { setToken } from '@/utils/token'
import { useStorage } from '@vueuse/core'
import bgImg from '../../assets/svgs/login_banner.svg'
import logo from "../../assets/icons/logo.svg"

import api from './api'

const title = import.meta.env.VITE_APP_TITLE

const router = useRouter()
const { query } = useRoute()

const loginInfo = ref({
  username: '',
  password: '',
})

initLoginInfo()

function initLoginInfo() {
  const localLoginInfo = lStorage.get('loginInfo')
  if (localLoginInfo) {
    loginInfo.value.username = localLoginInfo.username || ''
    loginInfo.value.password = localLoginInfo.password || ''
  }
}

const isRemember = useStorage('isRemember', false)
const loging = ref(false)
async function handleLogin() {
  const { username, password } = loginInfo.value
  if (!username || !password) {
    $message.warning('请输入用户名和密码')
    return
  }
  try {
    $message.loading('正在验证...')
    loging.value = true
    const res = await api.login({ username, password: password.toString() })
    if (res.code === 0) {
      $message.success('登录成功')
      setToken(res.data.token)
      if (isRemember.value) {
        lStorage.set('loginInfo', { username, password })
      } else {
        lStorage.remove('loginInfo')
      }
      if (query.redirect) {
        const path = query.redirect
        Reflect.deleteProperty(query, 'redirect')
        router.push({ path, query })
      } else {
        router.push('/')
      }
    } else {
      $message.warning(res.message)
    }
  } catch (error) {
    $message.error(error.message)
  }
  loging.value = false
}
</script>
<style>
body {
  background: url('@/assets/svgs/login_bg.svg') no-repeat;
  background-size: cover;
}
.loginbody {
  user-select: none;
  -webkit-user-select: none;
}
</style>
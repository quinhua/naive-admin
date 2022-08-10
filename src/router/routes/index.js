export const basicRoutes = [
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    isHidden: true,
    meta: {
      title: '登录页',
    },
  }
]

const modules = import.meta.globEager('@/views/**/route.js')
const asyncRoutes = []
Object.keys(modules).forEach((key) => {
  asyncRoutes.push(modules[key].default)
})

export { asyncRoutes }

const Layout = () => import('@/layout/index.vue')

export default {
  name: 'Test',
  path: '/test',
  component: Layout,
  redirect: '/test/unocss',
  meta: {
    title: '基础功能',
    icon: 'mdi:menu',
    order: 1,
  },
  children: [
    {
      name: 'Unocss',
      path: 'unocss',
      component: () => import('./unocss/index.vue'),
      meta: {
        title: 'unocss',
      },
    },
    {
      name: 'Message',
      path: 'message',
      component: () => import('./message/index.vue'),
      meta: {
        title: '提示',
      },
    },
    {
      name: 'Dialog',
      path: 'dialog',
      component: () => import('./dialog/index.vue'),
      meta: {
        title: '弹窗',
      },
    },
    {
      name: 'TestKeepAlive',
      path: 'keep-alive',
      component: () => import('./keep-alive/index.vue'),
      meta: {
        title: 'Keep-Alive',
        keepAlive: true,
      },
    },
  ],
}

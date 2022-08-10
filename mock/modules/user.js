import { resolveToken } from '../utils'

const users = {
  admin: {
    id: 1,
    name: '林扬生(admin)',
    avatar: 'https://i.postimg.cc/DfxyGH9j/f79o0kbwov-4m0hhup86iw0.webp',
    email: 'linyangsheng@qq.com',
    role: ['admin'],
  },
  editor: {
    id: 2,
    name: '林扬生(editor)',
    avatar: 'https://i.postimg.cc/DfxyGH9j/f79o0kbwov-4m0hhup86iw0.webp',
    email: 'linyangsheng@qq.com',
    role: ['editor'],
  },
  guest: {
    id: 3,
    name: '访客(guest)',
    avatar: 'https://i.postimg.cc/DfxyGH9j/f79o0kbwov-4m0hhup86iw0.webp',
    role: [],
  },
}
export default [
  {
    url: '/api/user',
    method: 'get',
    response: ({ headers }) => {
      const token = resolveToken(headers?.authorization)
      return {
        code: 0,
        data: {
          ...(users[token] || users.guest),
        },
      }
    },
  },
]

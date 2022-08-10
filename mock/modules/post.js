export default [
  {
    url: '/api/posts',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: [
          {
            id: 36,
            title: '林扬生',
            author: '林扬生',
            category: '林扬生',
            description: '林扬生',
            content: '林扬生',
            isRecommend: true,
            isPublish: true,
            createDate: '2022-08-04T04:03:26.000Z',
            updateDate: '2022-08-04T04:03:36.000Z',
          }
        ],
      }
    },
  },
]

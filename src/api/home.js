import request from '@/axios'

export function getArticleList() {
  return request({
    url: '/articleList',
    method: 'get'
  })
}
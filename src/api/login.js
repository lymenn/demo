import request from '@/utils/request'

export function getUser (token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: {token}
  })
}

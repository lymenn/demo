import router from './router'
import store from './store'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth'

function hasPermission (roles, permissionRoles) {
  if (roles.indexOf('admin') >= 0) return true // admin permission passed directly
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  if (getToken()) {
    // 已登录
    if (to.path === '/login') {
      next({path: '/'})
    } else {
      if (store.getters.roles.length === 0) { // 判断当前用户是否已经获取完用户信息
        store.dispatch('getUserInfo').then(res => {
          const roles = res.data.roles
          store.dispatch('generateRoutes', {roles}).then(res => {
            router.addRoutes(store.getters.addRoutes)
            next({ ...to, replace: true })
          }).catch((err) => {
            store.dispatch('FedLogout').then(() => {
              Message.error(err)
              next({ path: '/' })
            })
          })
        })
      } else {
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        if (hasPermission(store.getters.roles, to.meta.roles)) {
          next()
        } else {
          next({ path: '/401', replace: true, query: { noGoBack: true } })
        }
        // 可删 ↑
      }
    }
  } else {
    // 未登录
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
    }
  }
})

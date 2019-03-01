import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/index.vue'
import Dashboard from '@/views/dashboard/index.vue'
import Layout from '@/views/layout/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/layout',
      name: 'layout',
      component: Layout
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    }
  ]
})

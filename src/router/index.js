import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/index.vue'
Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/login',
    hidden: true,
    component: () => import('@/views/login/index')
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index')
      }
    ]
  },
  {
    path: '/example',
    name: 'Example',
    component: Layout,
    meta: {
      title: 'Example栗子',
      icon: 'example'
    },
    children: [
      {
        path: 'table',
        name: 'table',
        meta: {
          title: 'table栗子',
          icon: 'table'
        },
        component: () => import('@/views/example/table')
      }, {
        path: 'tree',
        name: 'tree',
        meta: {
          title: 'tree栗子',
          icon: 'tree'
        },
        component: () => import('@/views/example/tree')
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        meta: {
          title: 'form栗子',
          icon: 'form'
        },
        component: () => import('@/views/form/index')
      }
    ]
  },
  {
    path: '/nested',
    component: Layout,
    meta: {
      title: 'Nested栗子',
      icon: 'nested'
    },
    name: 'Nested',
    children: [
      {
        path: 'menu1',
        name: 'Menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        meta: {
          title: 'Menu1栗子'
        },
        children: [
          {
            path: 'menu1-1',
            name: 'Menu1-1',
            meta: {
              title: 'Menu1-1栗子'
            },
            component: () => import('@/views/nested/menu1/menu1-1/index')
          }, {
            path: 'menu1-2',
            name: 'Menu1-2',
            meta: {
              title: 'Menu1-2栗子'
            },
            component: () => import('@/views/nested/menu1/menu1-2/index'),
            children: [
              {
                path: 'menu1-2-1',
                name: 'Menu1-2-1',
                meta: {
                  title: 'Menu1-2-1栗子'
                },
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1/index')
              },
              {
                path: 'menu1-2-2',
                name: 'Menu1-2-2',
                meta: {
                  title: 'Menu1-2-2栗子'
                },
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2/index')
              }
            ]
          }, {
            path: 'menu1-3',
            name: 'Menu1-3',
            meta: {
              title: 'Menu1-3栗子'
            },
            component: () => import('@/views/nested/menu1/menu1-3/index')
          }
        ]
      },
      {
        path: 'menu2',
        name: 'Menu2',
        meta: {
          title: 'Menu2栗子'
        },
        component: () => import('@/views/nested/menu2/index')
      }
    ]
  },
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: {
          title: 'External Link栗子',
          icon: 'link'
        }
      }
    ]
  }
]
export default new Router({
  routes: constantRouterMap
})

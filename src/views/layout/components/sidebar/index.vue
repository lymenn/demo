<template>
    <div class="sidebar-container">
      <el-menu
      class="el-menu-demo"
      mode="vertical"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9">
        <sidebar-item v-for="route in routes" :key="route.path" :item="route"></sidebar-item>
    </el-menu>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import SidebarItem from './sidebaritem'
export default {
  components: {
    SidebarItem
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes () {
      const routelist = [
        {
          path: '/login',
          hidden: true
        },
        {
          path: '/404',
          hidden: true
        },
        {
          path: '/',
          redirect: '/dashboard',
          name: 'Dashboard',
          hidden: true,
          children: [{path: 'dashboard'}]
        },
        {
          meta: {
            icon: 'example',
            title: 'Example'

          },
          name: 'Example',
          path: '/example',
          redirect: '/example/table',
          children: [{
            meta: {
              icon: 'table',
              title: 'Table'
            },
            name: 'table',
            path: 'table'
          }, {
            meta: {
              icon: 'tree',
              title: 'Tree'
            },
            name: 'tree',
            path: 'tree'
          }]
        },
        {
          name: 'form',
          path: 'index',
          children: [{
            meta: {
              icon: 'form',
              title: 'Form'
            }
          }]
        },
        {
          name: 'Nested',
          path: 'nested',
          redirect: '/nested/menu1',
          meta: {
            icon: 'nested',
            title: 'Nested'
          },
          children: [{
            name: 'Menu1',
            path: 'menu1',
            meta: {
              title: 'Menu1'
            },
            children: [{
              name: 'Menu1-1',
              path: 'menu1-1',
              meta: {
                title: 'Menu1-1'
              }
            }, {
              name: 'Menu1-2',
              path: 'menu1-2',
              meta: {
                title: 'Menu1-2'
              },
              children: [
                {
                  name: 'Menu1-2-1',
                  path: 'menu1-2-1',
                  meta: {
                    title: 'Menu1-2-1'
                  },
                  children: [
                    {
                      name: 'Menu1-2-1-1',
                      path: 'menu1-2-1-1',
                      meta: {
                        title: 'Menu1-2-1-1'
                      },
                      children: [{
                        name: 'Menu1-2-1-1-1',
                        path: 'menu1-2-1-1-1',
                        meta: {
                          title: 'Menu1-2-1-1-1'
                        }
                      }]
                    }
                  ]
                },
                {
                  name: 'Menu1-2-2',
                  path: 'menu1-2-2',
                  meta: {
                    title: 'Menu1-2-2'
                  }
                }
              ]
            }, {
              name: 'Menu1-3',
              path: 'menu1-3',
              meta: {
                title: 'Menu1-3'
              }
            }]
          }, {
            name: 'Menu2',
            path: 'menu2',
            meta: {
              title: 'Menu2'
            }
          }]
        },
        {
          path: 'external-link',
          children: [{
            meta: {
              icon: 'link',
              title: 'External Link',
              path: 'https://panjiachen.github.io/vue-element-admin-site/#/'
            }
          }]
        }
      ]
      return routelist
    },
    isCollapse () {
      return !this.sidebar.opened
    }
  }
}
</script>

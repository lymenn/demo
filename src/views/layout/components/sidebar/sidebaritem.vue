<template>
  <div class="menu-wrapper" v-if="!item.hidden && item.children">
    <template v-if="hasOneShowingChild(item.children, item)&& (!onlyOneChild.children||onlyOneChild.noShowingChildren)">
      <el-menu-item :index="item.path" :class="{'submenu-title-noDropdown':!isNest}">
          <item v-if="onlyOneChild.meta" :icon="onlyOneChild.meta.icon" :title="onlyOneChild.meta.title"></item>
      </el-menu-item>
    </template>
    <template v-else>
      <el-submenu :index="resolvePath(item.path)">
        <template slot="title">
          <item v-if="item.meta" :icon="item.meta.icon" :title="item.meta.title"></item>
        </template>
        <template v-for="child in item.children">
          <sidebar-item
          v-if="child.children&&child.children.length>0"
          :is-nest="true"
          :item="child"
          :key="child.path"
          :base-path="resolvePath(child.path)"
          class="nest-menu" />
          <!-- <app-link v-else :to="resolvePath(child.path)" :key="child.name"> -->
          <el-menu-item v-else :index="resolvePath(child.path)" :key="child.name">
            <item v-if="child.meta" :icon="child.meta.icon" :title="child.meta.title" />
          </el-menu-item>
        <!-- </app-link> -->
        </template>
      </el-submenu>
    </template>
  </div>
</template>
<script>
import path from 'path'
import Item from './item'
import AppLink from './Link'
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      onlyOneChild: null
    }
  },
  components: { Item, AppLink },
  methods: {
    hasOneShowingChild (children, parent) {
      const showingChildren = children.filter(item => {
        if (item.hidden === false) {
          return false
        } else {
          this.onlyOneChild = item
          return true
        }
      })
      // 只有一个子路由时，则展示该子路由
      if (showingChildren.length === 1) {
        return true
      }
      // 如果没有子路由 则展示父路由
      if (showingChildren.length === 0) {
        this.onlyOneChild = {...parent, path: '', noShowingChildren: true}
        return true
      }
      console.log(22)
      console.log(parent)
      console.log(22)
      return false
    },
    resolvePath (routePath) {
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>

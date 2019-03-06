<template>
    <div class="sidebar-container">
      <el-menu
      class="el-menu-demo"
      mode="vertical"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9">
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"></sidebar-item>
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
      return this.$router.options.routes
    },
    isCollapse () {
      return !this.sidebar.opened
    }
  }
}
</script>

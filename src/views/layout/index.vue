<template>
    <div :class="classObj">
        <sidebar></sidebar>
        <div class="main-container">
          <navbar></navbar>
          <tags></tags>
          <app-main></app-main>
        </div>
    </div>
</template>
<script>
import {Navbar, Sidebar, AppMain, Tags} from './components/'
export default {
  components: {
    Navbar,
    Sidebar,
    AppMain,
    Tags
  },
  computed: {
    sidebar: function () {
      return this.$store.state.app.sidebar
    },
    classObj: function () {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened
      }
    }
  }
}
</script>

<template>
    <div :class="classObj">
        <sidebar></sidebar>
        <div class="main-container">
          <navbar></navbar>
          <app-main></app-main>
        </div>
    </div>
</template>
<script>
import {Navbar, Sidebar, AppMain} from './components/'
export default {
  components: {
    Navbar,
    Sidebar,
    AppMain
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

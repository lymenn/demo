<template>
    <div>
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
  }
}
</script>

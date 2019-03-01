<template>
    <div class="navbar-container">
        <Hamburger class="hamburger-container"></Hamburger>
        <breadcrumb></breadcrumb>
          <el-dropdown trigger="click" class="dropdown-container">
          <span class="el-dropdown-link">
              <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif" alt="">
              <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>主页</el-dropdown-item>
            <el-dropdown-item>注销</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>
<script>
import Breadcrumb from '@/components/breadcrumb'
import Hamburger from '@/components/hamburger'
export default {
  components: {
    Breadcrumb,
    Hamburger
  }
}
</script>
<style lang="scss" scoped>
.navbar-container{
    position: relative;
    height: 50px;
    border-bottom: solid 1px #e6e6e6;
    .hamburger-container{
        float: left;
        margin: 0 10px;
        height: 50px;
    }
    .dropdown-container{
      position: absolute;
      right: 10px;
      top: 5px;
      .el-dropdown-link{
          img{
            width: 40px;
            height: 40px;
            border-radius: 10px;
          }
      }
    }

}

</style>

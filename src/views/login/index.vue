<template>
    <div class="login-container">
        <el-form ref="form" class="login-form" :rules="loginRules" :model="loginForm">
            <h3 class="title">后台登录</h3>
            <el-form-item prop="username">
                <span class="svg-container">
                    <svg-icon iconname="user"></svg-icon>
                </span>
                <el-input type="text" name="username" v-model="loginForm.username" placeholder="tangem"></el-input>
            </el-form-item>
            <el-form-item  prop="password">
                <span class="svg-container">
                    <svg-icon iconname="password"></svg-icon>
                </span>
                <el-input :type="isShowPwd?'text': 'password'" v-model="loginForm.password" placeholder="tangem"></el-input>
                <span class="show-pwd" @click="isShowPwd = !isShowPwd">
                    <svg-icon iconname="eye"></svg-icon>
                </span>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width:100%">登录</el-button>
            </el-form-item>
            <div class="tips">
                <span>username: admin</span>
                <span>password: admin</span>
            </div>
        </el-form>
    </div>
</template>
<script>
import { isvalidUsername } from '@/utils/validate'
export default {
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('密码长度不能小于5'))
      } else {
        callback()
      }
    }
    return {
      isShowPwd: false,
      loginForm: {
        username: 'tangem',
        password: 'tangem'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      }
    }
  },
  methods: {

  },
  watch: {

  }
}
</script>
<style lang="scss">
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
.login-container{
    .el-form-item{
        text-align: left;
        background-color: rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .el-input{
        width: 85%;
        input{
            background-color: transparent;
            border: none;
            color: $light_gray;
        }
    }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
.login-container{
    height: 100%;
    background-color: $bg;
    overflow: hidden;
    color: white;
    .login-form{
        padding: 35px 35px 15px 35px;
        width: 520px;
        max-width: 100%;
        margin: 120px auto;
    }
    .tips{
        text-align:left;
        span:first-of-type{
            margin-right:60px;
        }
    }
    .svg-container{
        display: inline-block;
        padding: 6px 5px 6px 15px;
        color:#889aa4;
    }
    .show-pwd{
        position: absolute;
        right: 5px;
        height: 100%;
        line-height: 52px;
        color: $dark_gray;
        user-select: none;
        cursor: pointer;
    }
}
</style>

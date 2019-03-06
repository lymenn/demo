<template>
    <el-alert
    style="padding:30px"
        :closable="false"
        title="menu1"
        type="success">
        <router-view></router-view>
    </el-alert>
</template>
<script>
export default {

}
</script>

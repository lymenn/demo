<template>
    <el-scrollbar ref="scrollContainer" :vertical="false" class="scroll-container">
        <slot/>
    </el-scrollbar>
</template>
<script>
export default {

}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.scroll-container{
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
}
</style>

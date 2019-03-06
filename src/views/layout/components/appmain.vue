<template>
    <div class="appmain-container">
        <transition mode="out-in" name="fade-transform">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
    .appmain-container{
        padding: 20px;
    }
</style>

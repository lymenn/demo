<template>
    <div class="tagsview-container">
        <scroll-pane class="tagsview-wrapper">
            <router-link
            class="tagsview-item"
            :class="isActive(tag)? 'active':''"
            :key="tag.path"
            v-for="tag in visitedViews"
            :to="{ name: tag.name}">
            {{tag.meta.title}}<i class="el-icon-close" @click="closeCurTag"></i>
            </router-link>
        </scroll-pane>
    </div>
</template>
<script>
import ScrollPane from '@/components/scrollpane'
export default {
  components: {
    ScrollPane
  },
  computed: {
    visitedViews () {
      return this.$store.state.tagsView.visitedViews
    }
  },
  watch: {
    $route () {
      this.addViewTags()
    }
  },
  methods: {
    isActive (tag) {
      return tag.path === this.$route.path
    },

    addViewTags () {
      this.$store.dispatch('addView', this.$route)
    },
    closeCurTag () {
      this.$store.dispatch('delView', this.$route)
    }
  }
}
</script>
<style lang="scss" scoped>
.tagsview-container{
  height: 34px;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  .tagsview-wrapper{
    .tagsview-item{
        display: inline-block;
        position: relative;
        cursor: pointer;
        height: 26px;
        line-height: 26px;
        border: 1px solid #d8dce5;
        padding: 0 8px;
        font-size: 12px;
        margin-top: 4px;
        margin-left: 5px;
        &:first-of-type{
          margin-left: 15px;
        }
        &:last-of-type{
          margin-right: 15px;
        }
        &.active{
          background-color: #42b983;
          border-color: #42b983;
          color: white;
          &::before{
            content: " ";
            width: 8px;
            height: 8px;
            border-radius: 8px;
            display: inline-block;
            background: white;
          }
        }
        .el-icon-close{
          width: 16px;
          height: 16px;
          text-align: center;
          line-height: 16px;
          border-radius: 50%;
          &:hover{
            background-color: #d8dce5;
          }
          &::before{
            transform: scale(0.6);
            display: inline-block;
          }

        }
      }
  }

}
</style>

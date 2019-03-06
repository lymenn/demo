<template>
    <div>
        <scroll-pane>
            <router-link
            :key="item.path"
            v-for="item in visitedViews"
            :to="{ name: item.name}">
            {{item.meta.title}}
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
    addViewTags () {
      this.$store.dispatch('addView', this.$route)
    }
  }
}
</script>

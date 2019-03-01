<template>
    <svg :class="svgClass">
      <use :xlink:href="iconName"></use>
    </svg>
</template>
<script>
export default {
  props: {
    iconname: {
      type: String,
      default: ''
    },
    svgclass: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName: function () {
      return '#icon-' + this.iconname
    },
    svgClass: function () {
      if (this.svgclass !== '') {
        return this.svgclass
      }
      return 'svg-icon'
    }
  }
}
</script>
<style lang="scss" scoped>
.svg-icon{
  width: 1em;
  height: 1em;
  fill: currentColor;
}
</style>

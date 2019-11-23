<template>
  <component :is="tag">
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
import passiveEvents from 'detect-passive-events'

export default Vue.extend({
  props: {
    tag: { type: String, default: 'div' }
  },
  data() {
    return {
      resizeHandler: undefined as undefined | (() => void)
    }
  },
  mounted() {
    this.resizeHandler = this.updateHeight.bind(this)
    const options = passiveEvents.hasSupport
      ? { passive: true }
      : false
    addEventListener('resize', this.resizeHandler, options)
    this.updateHeight()
  },

  destroyed() {
    if (this.resizeHandler) {
      removeEventListener('resize', this.resizeHandler)
    }
  },
  methods: {
    updateHeight() {
      if (!this.$el) {
        return
      }
      const { height } = this.$el.getBoundingClientRect()
      const { fontSize } = getComputedStyle(document.documentElement)

      const remPx = parseFloat(fontSize)
      const remainderPx = height % remPx

      if (remainderPx !== 0) {
        const el = this.$el as HTMLElement
        const paddingBottomPx = remPx - remainderPx
        const paddingBottomRem = paddingBottomPx / remPx
        el.style.paddingBottom = `${paddingBottomRem}rem`
      }
    }
  }
})
</script>

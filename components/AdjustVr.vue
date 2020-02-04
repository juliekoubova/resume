<template>
  <component :is="tag">
    <global-events
      target="window"
      @resize.passive="updateHeight()"
      @orientationchange.passive="updateHeight()"
    />
    <slot />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
import GlobalEvents from 'vue-global-events'

export default Vue.extend({
  components: { GlobalEvents },
  props: {
    tag: { type: String, default: 'div' }
  },
  mounted() {
    this.updateHeight()
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
        const adjustPx = remPx - remainderPx
        const adjustRem = adjustPx / remPx
        el.style.marginBottom = `${adjustRem}rem`
      }
    }
  }
})
</script>

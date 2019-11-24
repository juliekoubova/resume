<template>
  <div class="relative" aria-hidden="true">
    <div
      :class="{
        'border-current': !last,
        'border-current-to-transparent': last,
        'mt-8': first
      }"
      class="border-l-4 -translate-x-1/2 absolute top-0 bottom-0 left-1/2 select-none"
    />
    <div
      class="relative w-3 h-3 bg-white border-current border-4 mx-auto mt-5 rounded-full select-none"
      :class="{ pulse: pulsing }"
    />
  </div>
</template>

<style scoped>
.border-current-to-transparent {
  border-image: linear-gradient(to bottom, currentColor, transparent) 1 100%;
}
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    first: { type: Boolean, default: false },
    last: { type: Boolean, default: false },
    pulsing: { type: Boolean, default: false }
  }
})
</script>

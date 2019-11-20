<template>
  <div class="relative" aria-hidden="true">
    <div
      :class="{ 'mt-8': first }"
      class="border-l-4 -translate-x-1/2 border-current absolute top-0 bottom-0 left-1/2"
    />
    <div
      class="relative w-3 h-3 bg-white border-current border-4 mx-auto mt-5 rounded-full"
      :class="{ pulse: pulsing }"
    />
  </div>
</template>

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

<template>
  <div class="relative">
    <div
      :class="{ 'mt-8': first }"
      class="border-l-4 -translate-x-1/2 border-current absolute top-0 bottom-0 left-1/2"
    />
    <svg viewBox="0 0 20 20" class="relative w-8 mx-auto mt-3">
      <circle
        cx="10"
        cy="10"
        r="3"
        fill="white"
        stroke-width="3"
        class="stroke-current"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    first: { type: Boolean, default: false },
    last: { type: Boolean, default: false }
  }
})
</script>

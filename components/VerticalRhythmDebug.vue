<template>
  <div class="relative">
    <slot />
    <div
      :class="{ 'vr-debug': enabled }"
      class="absolute top-0 left-0 right-0 h-full z-10 pointer-events-none"
    >
      <label
        class="select-none fixed bottom-0 right-0 mx-2 pointer-events-auto opacity-25 hover:opacity-100 print:hidden"
      >
        <input v-model="enabled" type="checkbox">
        Debug Vertical Rhythm
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return { enabled: false }
  }
})
</script>

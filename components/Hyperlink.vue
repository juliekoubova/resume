<template>
  <a
    :href="href"
    v-bind="$attrs"
    class="font-medium text-pink-700 dark:text-pink-500"
    target="_blank"
    rel="noopener"
  >
    <slot />
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    href: { type: String, required: true }
  }
})
</script>

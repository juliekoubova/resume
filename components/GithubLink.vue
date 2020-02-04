<template>
  <a
    :href="href"
    v-bind="$attrs"
    class="interactive-link"
    target="_blank"
    rel="noopener"
  >
    <fa :icon="['fab','github']" />
    <span class="underline print:hidden">
      <slot />
    </span>
    <span class="underline hidden print:inline">{{ href }}</span>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    project: { type: String, required: true }
  },
  computed: {
    href() {
      return `https://github.com/${this.project}/`
    }
  }
})
</script>

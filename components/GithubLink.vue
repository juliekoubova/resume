<template>
  <span>
    <fa :icon="['fab','github']" />
    <a :href="href" class="interactive-link" target="_blank" rel="noopener">
      <slot>{{ project }}</slot>
    </a>
  </span>
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

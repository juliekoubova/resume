<template>
  <span>
    <a :href="href" class="interactive-link" target="_blank" rel="noopener">
      <fa :icon="['fab','github']" />
      <span class="underline">
        <slot>{{ project }}</slot>
      </span>
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

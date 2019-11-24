<template>
  <a :href="href" @click.prevent="scroll">
    <slot />
  </a>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    href: { type: String, required: true }
  },
  methods: {
    scroll() {
      const el = document.querySelector(this.href)
      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }
})
</script>

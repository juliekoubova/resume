<template>
  <footer class="sm:flex sm:justify-between">
    <span class="sm:hidden tracking-tight">
      Updated
      <time-value
        :value="updated"
        :format="{ month: 'short', year: 'numeric' }"
      />.
    </span>
    <span class="hidden sm:inline tracking-tight">
      Updated
      <time-value
        :value="updated"
        :format="{ month: 'long', year: 'numeric' }"
      />.
    </span>
    <span class="tracking-tight">
      <span>Made with</span>
      <a
        class="underline interactive-link"
        href="https://nuxtjs.org/"
        target="_blank"
        rel="noopener"
      >nuxt.js</a>
      <span>and</span>
      <a
        class="underline interactive-link"
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noopener"
      >tailwind.css</a>.
      <github-link
        aria-label="This project's source on GitHub"
        project="juliekoubova/resume"
      />
    </span>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import GithubLink from '@/components/GithubLink.vue'
import TimeValue from '@/components/TimeValue.vue'
export default Vue.extend({
  components: { TimeValue, GithubLink },
  props: {
    updated: { type: Date, default: () => new Date() }
  }
})
</script>

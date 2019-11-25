<template>
  <footer class="flex justify-between">
    <div>
      Updated
      <time-value
        :value="updated"
        :format="{ month: 'long', year: 'numeric' }"
      />
    </div>
    <div class="flex flex-wrap justify-end">
      <div class="mr-1">
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
      </div>
      <github-link project="juliekoubova/resume">Show me how</github-link>
    </div>
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

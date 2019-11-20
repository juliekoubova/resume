<template>
  <footer class="flex justify-between">
    <div>
      Updated
      <time-value
        :value="updated"
        :format="{ month: 'long', year: 'numeric' }"
      />
    </div>
    <div>
      <span>Made with</span>
      <a
        class="interactive-link"
        href="https://nuxtjs.org/"
        target="_blank"
        rel="noopener"
      >nuxt.js</a>
      <span>and</span>
      <a
        class="interactive-link"
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noopener"
      >Tailwind CSS</a>.
      <github-link project="juliekoubova/resume">Wanna see how?</github-link>
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

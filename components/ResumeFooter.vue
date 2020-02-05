<template>
  <footer class="sm:flex sm:justify-between">
    <span class="sm:hidden">
      Updated
      <time-value
        :value="updated"
        :format="{ month: 'short', year: 'numeric' }"
      />.
    </span>
    <span class="hidden sm:inline">
      Updated
      <time-value
        :value="updated"
        :format="{ month: 'long', year: 'numeric' }"
      />.
    </span>
    <span>
      <span>Made with</span>
      <hyperlink
        class="underline"
        href="https://nuxtjs.org/"
      >nuxt.js</hyperlink>
      <span>and</span>
      <hyperlink
        class="underline"
        href="https://tailwindcss.com/"
      >tailwind.css</hyperlink>.
      <github-link
        aria-label="This project&rsquo;s source on GitHub"
        project="juliekoubova/resume"
      />
    </span>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import GithubLink from '@/components/GithubLink.vue'
import Hyperlink from '@/components/Hyperlink.vue'
import TimeValue from '@/components/TimeValue.vue'
export default Vue.extend({
  components: { Hyperlink, TimeValue, GithubLink },
  props: {
    updated: { type: Date, default: () => new Date() }
  }
})
</script>

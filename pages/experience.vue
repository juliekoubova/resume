<template>
  <div class="flex min-h-screen">
    <div class="flex-grow py-24">
      <div class="max-w-2xl mx-16">
        <h1 class="sr-only">Professional Experience</h1>
        <timeline-item
          v-for="(item, index) of experience"
          :key="item.key"
          :first="index === 0"
          :from="item.from"
          :to="item.to"
        >
          <h3 class="vr-loose-base text-gray-700 font-bold">{{ item.name }}</h3>
          <div
            v-if="item.vendor"
            class="font-medium text-gray-600 vr-relaxed-sm"
          >{{ item.vendor }}</div>
          <div
            class="markdown-relaxed-sm break-words text-gray-800 mt-2"
            v-html="item.html"
          />
          <div v-if="item.github" class="vr-relaxed-sm text-pink-600">
            <github-link :project="item.github" />
          </div>
        </timeline-item>
      </div>
    </div>
    <div
      class="flex-shrink-0 bg-pink-800 text-pink-100 px-12 hidden sm:block w-1/3 py-20"
    >
      <h2 class="sr-only">Technology</h2>
      <div v-for="section of tech" :key="section.name">
        <h3 class="vr-relaxed-base font-bold">{{ section.name }}</h3>
        <ul class="vr-relaxed-sm pb-4">
          <li v-for="item of section.items" :key="item">{{ item }}</li>
        </ul>
      </div>

      <footer
        class="vr-relaxed-xs mt-16 text-pink-200 uppercase tracking-wide"
      >Updated November 2019</footer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import GithubLink from '@/components/GithubLink.vue'
import TimelineItem from '@/components/TimelineItem.vue'
import { loadExperience } from '@/src/experience'
import { loadTech } from '@/src/tech'

export default Vue.extend({
  components: { GithubLink, TimelineItem },
  asyncData() {
    return {
      experience: loadExperience(),
      tech: loadTech()
    }
  }
})
</script>

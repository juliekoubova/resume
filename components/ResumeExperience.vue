<template>
  <div>
    <timeline-item
      v-for="(item, index) of experience"
      :key="item.key"
      :first="index === 0"
      :from="item.from"
      :last="index === experience.length - 1"
      :to="item.to"
    >
      <h3
        class="vr-relaxed-base sm:mt-2 text-gray-700 font-bold"
      >
        {{ item.name }}
      </h3>
      <div
        class="font-medium text-gray-700 vr-relaxed-sm tracking-wide"
      >
        {{ item.vendor || 'Independent' }}
      </div>
      <div
        class="markdown-relaxed-sm break-words hyphens-auto md:text-justify print:text-justify mt-2"
        v-html="item.html"
      />
      <div v-if="item.github" class="vr-relaxed-sm interactive-link">
        <github-link :project="item.github">{{ item.github }}</github-link>
      </div>
    </timeline-item>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import GithubLink from '@/components/GithubLink.vue'
import TimelineItem from '@/components/TimelineItem.vue'
export default Vue.extend({
  components: { GithubLink, TimelineItem },
  props: {
    experience: { type: Array, required: true }
  }
})
</script>

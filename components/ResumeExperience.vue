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
      <h3 class="vr-loose-base text-gray-700 font-bold">{{ item.name }}</h3>
      <div
        v-if="item.vendor"
        class="font-medium text-gray-600 vr-relaxed-sm tracking-wide"
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

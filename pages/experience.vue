<template>
  <div class="flex min-h-screen">
    <div class="flex-grow py-24">
      <div class="max-w-xl mx-auto">
        <h1 class="sr-only">Professional Experience</h1>
        <timeline-item
          v-for="(item, index) of experience"
          :key="item.title"
          :first="index === 0"
          v-bind="item"
        >
          <h4 class="font-bold">{{ item.title }}</h4>
          <h5 class="font-medium text-gray-600 vr-normal-sm">{{ item.vendor }}</h5>
          <p
            class="vr-relaxed-sm break-words text-gray-800"
          >{{ item.description }}</p>
        </timeline-item>
      </div>
    </div>
    <div
      class="flex-shrink-0 bg-pink-800 text-pink-100 px-12 hidden sm:block w-1/3 py-20"
    >
      <h3>Web</h3>
      <ul>
        <li>TypeScript</li>
        <li>Angular</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TimelineItem from '@/components/TimelineItem.vue'

export default Vue.extend({
  components: { TimelineItem },
  computed: {
    experience() {
      return this.$accessor.experience.items
    }
  }
})
</script>

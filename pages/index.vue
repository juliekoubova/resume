<template>
  <div>
    <resume-cover class="fixed top-0 left-0 right-0" />
    <business-card
      class="absolute -mt-24 right-0"
      style="transform: rotate(12deg);"
    />
    <div class="max-w-5xl mx-auto px-6" style="margin-top: 100rem;">
      <h1 class="vr-loose-xl">Professional Experience</h1>
      <div class="flex">
        <div class="w-2/3">
          <resume-experience :experience="experience" />
        </div>
        <div class="w-1/3 pt-10 px-12 hidden sm:block">
          <resume-tech class="mt-16" :tech="tech" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ResumeCover from '@/components/ResumeCover.vue'
import BusinessCard from '@/components/BusinessCard.vue'
import ResumeExperience from '@/components/ResumeExperience.vue'
import ResumeTech from '@/components/ResumeTech.vue'
import { loadExperience } from '@/src/experience'
import { loadTech } from '@/src/tech'

export default Vue.extend({
  components: {
    BusinessCard,
    ResumeCover,
    ResumeExperience,
    ResumeTech
  },
  asyncData() {
    return {
      experience: loadExperience(),
      tech: loadTech()
    }
  }
})
</script>

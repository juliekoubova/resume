<template>
  <div>
    <resume-cover :description="description" />
    <h2 class="screen:sr-only vr-relaxed-lg font-medium md:px-8-safe">My Professional Experience</h2>
    <div class="flex screen:max-w-5xl mx-auto screen:px-2-safe md:px-6-safe">
      <div class="mr-1 sm:mr-6 sm:ml-40">
        <resume-experience :experience="experience" class="mt-4" />
        <resume-footer
          class="vr-normal-xs mt-16 pb-2 md:pb-8 text-pink-600 tracking-wide print:absolute print:bottom-0"
        />
      </div>
      <div class="flex-shrink-0 w-1/4 hidden md:block">
        <resume-tech :tech="tech" class="mt-6 ml-4" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ResumeCover from '@/components/ResumeCover.vue'
import ResumeExperience from '@/components/ResumeExperience.vue'
import ResumeFooter from '@/components/ResumeFooter.vue'
import ResumeTech from '@/components/ResumeTech.vue'
import { loadExperience } from '@/src/experience'
import { loadTech } from '@/src/tech'

export default Vue.extend({
  components: {
    ResumeCover,
    ResumeExperience,
    ResumeFooter,
    ResumeTech
  },
  asyncData() {
    return {
      description: process.env.npm_package_description,
      experience: loadExperience(),
      tech: loadTech()
    }
  }
})
</script>

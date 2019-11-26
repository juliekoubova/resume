<template>
  <div>
    <resume-cover :description='description' />
    <div class="screen:max-w-5xl mx-auto px-2-safe md:px-6-safe">
      <div class="flex">
        <div class="md:ml-40 print:ml-40">
          <h2 class="sr-only">Professional Experience</h2>
          <resume-experience :experience="experience" class="mt-4 md:mr-4" />
          <resume-footer
            class="vr-normal-xs mt-16 pb-2 md:pb-8 text-pink-600 tracking-wide print:fixed"
          />
        </div>
        <div class="flex-shrink-0 w-1/4 pl-10 hidden md:block print:hidden">
          <resume-tech :tech="tech" class="mt-4" />
        </div>
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

<template>
  <div>
    <resume-cover />
    <a name="experience" />
    <div class="bg-pink-700 text-pink-100 px-8 flex justify-between">
      <div>
        <h1 class="vr-relaxed-3xl font-bold tracking-wide">Julie Koubová</h1>
        <h2 class="vr-relaxed-base pb-4">Software Developer</h2>
      </div>
      <div class="flex flex-col vr-relaxed-sm">
        <contact type="phone" icon-class="text-white print:text-gray-800" />
        <contact type="email" icon-class="text-white print:text-gray-800" />
        <contact type="location" icon-class="text-white print:text-gray-800" />
      </div>
    </div>
    <div class="screen:max-w-5xl mx-auto mt-6 px-6">
      <div class="flex">
        <div class="md:ml-40 print:ml-40">
          <h2 class="sr-only">Professional Experience</h2>
          <resume-experience :experience="experience" class="mt-4 mr-4" />
          <resume-footer
            class="vr-loose-xs mt-16 pb-8 text-pink-400 tracking-wide print:fixed"
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
import Contact from '@/components/Contact.vue'
import ResumeCover from '@/components/ResumeCover.vue'
import ResumeExperience from '@/components/ResumeExperience.vue'
import ResumeFooter from '@/components/ResumeFooter.vue'
import ResumeTech from '@/components/ResumeTech.vue'
import { loadExperience } from '@/src/experience'
import { loadTech } from '@/src/tech'

export default Vue.extend({
  components: {
    Contact,
    ResumeCover,
    ResumeExperience,
    ResumeFooter,
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

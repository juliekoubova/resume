<template>
  <div
    class="rounded -m-px flex flex-col bg-white text-gray-800 border border-gray-800 overflow-hidden shadow-xl"
  >
    <div class="p-6 bg-pink-800 text-pink-100">
      <div class="vr-normal-lg tracking-wide font-bold">Julie Koubová</div>
      <div class="vr-loose-xs lowercase">Software Developer</div>
    </div>

    <div class="p-6 mt-4 flex justify-between items-end vr-loose-xs">
      <div class="pr-4">
        <contact type="email" />
      </div>

      <div>
        <contact type="location" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Contact from '@/components/Contact.vue'
export default Vue.extend({
  components: { Contact }
})
</script>

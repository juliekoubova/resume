<template>
  <div class="font-sans leading-loose">
    <VerticalRhythmDebug v-if="isDev">
      <nuxt />
    </VerticalRhythmDebug>
    <nuxt v-else />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VerticalRhythmDebug from '@/components/VerticalRhythmDebug.vue'
export default Vue.extend({
  components: { VerticalRhythmDebug },
  computed: {
    isDev() { return this.$accessor.isDev }
  }
})
</script>

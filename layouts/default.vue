<template>
  <div class="font-sans leading-loose text-gray-800 bg-white dark:bg-gray-900 dark:text-gray-500">
    <VerticalRhythmDebug v-if="isDev">
      <nuxt />
    </VerticalRhythmDebug>
    <nuxt v-else />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { LinkPropertyHref } from 'vue-meta'
import VerticalRhythmDebug from '@/components/VerticalRhythmDebug.vue'

function preloadFont(name: string): LinkPropertyHref {
  return {
    as: 'font',
    crossOrigin: 'anonymous',
    href: require(`../assets/fonts/${name}.woff2`),
    mime: 'font/woff2',
    rel: 'preload'
  }
}

export default Vue.extend({
  components: { VerticalRhythmDebug },

  data() {
    return { isDev: process.env.NODE_ENV === 'development' }
  },

  head() {
    return {
      link: [
        preloadFont('quicksand-v19-latin-regular'),
        preloadFont('quicksand-v19-latin-700'),
        preloadFont('quicksand-v19-latin-500')
      ]
    }
  }
})
</script>

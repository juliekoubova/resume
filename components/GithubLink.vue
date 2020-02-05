<template>
  <hyperlink :href="href" v-bind="$attrs">
    <fa :icon="['fab','github']" />
    <span class="underline print:hidden">
      <slot />
    </span>
    <span class="underline hidden print:inline">{{ href }}</span>
  </hyperlink>
</template>

<script lang="ts">
import Vue from 'vue'
import Hyperlink from '@/components/Hyperlink.vue'

export default Vue.extend({
  components: { Hyperlink },
  props: {
    project: { type: String, required: true }
  },
  computed: {
    href() {
      return `https://github.com/${this.project}/`
    }
  }
})
</script>

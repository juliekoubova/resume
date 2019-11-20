<template>
  <fa-layers v-if="icon" fixed-width aria-hidden="true">
    <fa icon="circle" class="fill-current" />
    <fa :icon="icon" :transform="transform" size="xs" class="text-white" />
  </fa-layers>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    icon: { type: String, default: '' },
    transform: { type: String, default: '' }
  }
})
</script>

<template>
  <font-awesome-layers v-if="icon" fixed-width>
    <font-awesome-icon icon="circle" class="fill-current" />
    <font-awesome-icon :icon="icon" :transform="transform" size="xs" class="text-white" />
  </font-awesome-layers>
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

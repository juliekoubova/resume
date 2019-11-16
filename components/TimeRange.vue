<template>
  <div class="flex justify-end">
    <time-value v-if="from" :value="from" />
    <span v-if="from">&mdash;</span>
    <time-value v-if="to" :value="to" />
    <span v-else>present</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TimeValue from './TimeValue.vue'

export default Vue.extend({
  components: { TimeValue },
  props: {
    from: { type: Date, default: undefined },
    to: { type: Date, default: undefined }
  }
})
</script>

<template>
  <section class="flex">
    <div class="w-24 mt-2 flex-none vr-normal-sm text-gray-700 text-right">
      <time-value v-if="from" :value="from" />
      <span v-if="from">&mdash;</span>
      <time-value v-if="to" :value="to" />
    </div>
    <timeline-bullet-point
      class="w-10 mx-4 flex-none text-pink-500"
      :first="first"
    />
    <div class="flex-auto pb-10">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import TimelineBulletPoint from './TimelineBulletPoint.vue'
import TimeValue from '@/components/TimeValue.vue'
export interface TimelineItem {
  from: Date
  to?: Date
}

export default Vue.extend({
  components: { TimelineBulletPoint, TimeValue },
  props: {
    first: { type: Boolean, default: false },
    from: { type: Date, default: undefined },
    last: { type: Boolean, default: false },
    to: { type: Date, default: undefined }
  }
})
</script>

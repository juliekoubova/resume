<template>
  <section class="flex">
    <time-range
      class="w-24 mt-4 flex-none vr-normal-xs text-gray-700 text-right"
      :from="from"
      :to="to"
    />
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
import TimeRange from '@/components/TimeRange.vue'

export interface TimelineItem {
  from: Date
  to?: Date
}

export default Vue.extend({
  components: { TimelineBulletPoint, TimeRange },
  props: {
    first: { type: Boolean, default: false },
    from: { type: Date, default: undefined },
    last: { type: Boolean, default: false },
    to: { type: Date, default: undefined }
  }
})
</script>

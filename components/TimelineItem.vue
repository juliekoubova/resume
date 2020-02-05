<template>
  <section class="flex flex-col sm:flex-row sm:-ml-40">
    <time-range
      class="w-24 mt-4 flex-none vr-tight-xs font-medium text-gray-700 sm:justify-end"
      :from="from"
      :to="to"
    />
    <timeline-bullet-point
      class="w-8 mx-4 flex-none hidden sm:block text-pink-500"
      :first="first"
      :last="last"
      :pulsing="!to"
    />
    <div class="flex-auto pb-4">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import TimelineBulletPoint from '@/components/TimelineBulletPoint.vue'
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

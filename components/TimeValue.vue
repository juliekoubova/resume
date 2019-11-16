<template>
  <time :datetime="value">{{ formatted }}</time>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    value: { type: Date, required: true }
  },
  computed: {
    formatted() {
      const format = new Intl.DateTimeFormat('en-US', { year: 'numeric' })
      return format.format(new Date(this.value))
    }
  }
})
</script>

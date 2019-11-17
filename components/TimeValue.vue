<template>
  <time :datetime="year">{{ formatted }}</time>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    format: { type: Object, default: () => ({ year: 'numeric' }) },
    value: { type: Date, required: true }
  },
  computed: {
    formatted() {
      const dtf = new Intl.DateTimeFormat('en-US', this.format)
      return dtf.format(new Date(this.value))
    },
    year() {
      return new Date(this.value).toISOString()
    }
  }
})
</script>

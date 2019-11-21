<template>
  <span>
    <fa
      v-if="contact && contact.icon"
      :icon="contact.icon"
      :transform="contact.iconTransform"
      fixed-width
      class="text-pink-700"
    />
    <a v-if="contact && contact.href" :href="contact.href">{{ contact.text }}</a>
    <span v-else-if="contact">{{ contact.text }}</span>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
import { loadContacts } from '@/src/contact'

export default Vue.extend({
  props: {
    type: { type: String, required: true }
  },
  data() {
    const contacts = loadContacts()
    const contact = contacts[this.type]
    return { contact }
  }
})
</script>

<template>
  <ul>
    <li v-for="i of items" :key="i.key" :class="itemClass">
      <fa
        v-if="i.icon"
        :class="iconClass"
        :icon="i.icon"
        :transform="i.iconTransform"
        fixed-width
      />
      <a v-if="i.href" :href="i.href">{{ i.text }}</a>
      <span v-else>{{ i.text }}</span>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import { loadContacts } from '@/src/contact'

export default Vue.extend({
  props: {
    iconClass: { type: String, default: 'text-pink-700' },
    itemClass: { type: String, default: '' },
    type: { type: [Array, String], required: true }
  },

  computed: {
    items() {
      const types = Array.isArray(this.type)
        ? this.type as string[]
        : [this.type]

      const contacts = loadContacts()

      const items = types
        .map(t => contacts.get(t))
        .filter(Boolean)

      return items
    }
  }
})
</script>

<template>
  <div>
    <h3 class="vr-loose-lg font-bold">Contact</h3>
    <ul>
      <li v-for="c in contacts" :key="c.href" class="vr-loose-base">
        <fa
          :icon="c.icon"
          :transform="c.iconTransform"
          fixed-width
          class="text-pink-700"
        />
        <a :href="c.href">{{ c.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { loadContacts } from '@/src/contact'

export default Vue.extend({
  data() {
    return { contacts: loadContacts() }
  }
})
</script>

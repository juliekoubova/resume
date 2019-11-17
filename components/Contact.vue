<template>
  <div>
    <h3 class="vr-loose-lg font-bold">Contact</h3>
    <ul>
      <li v-for="c in contacts" :key="c.href">
        <circled-icon
          :icon="c.icon"
          :transform="c.iconTransform"
          class="text-pink-700"
        />
        <a :href="c.href">{{ c.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CircledIcon from '@/components/CircledIcon.vue'
import { loadContacts } from '@/src/contact'

export default Vue.extend({
  components: { CircledIcon },
  data() {
    return { contacts: loadContacts() }
  }
})
</script>

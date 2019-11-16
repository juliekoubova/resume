<template>
  <div>
    <h3 class="text-xl bold my-5">Contact</h3>
    <ul>
      <li v-for="c in contacts" :key="c.href">
        <circled-icon :icon="c.icon" :transform="c.iconTransform" class="text-pink-700" />
        <a :href="c.href">{{ c.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CircledIcon from './CircledIcon.vue'

export default Vue.extend({
  components: { CircledIcon },
  computed: {
    contacts() {
      return this.$accessor.contact.items
    }
  }
})
</script>

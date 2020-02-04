<template>
  <div>
    <h2 class="sr-only">Technology</h2>
    <div v-for="section of tech" :key="section.name">
      <h3 class="vr-relaxed-base font-bold text-gray-700">
        {{ section.name }}
      </h3>
      <ul class="vr-relaxed-sm pb-4">
        <li v-for="item of section.items" :key="item">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    tech: { type: Array, required: true }
  }
})
</script>

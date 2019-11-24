<template>
  <contact
    class="flex flex-wrap justify-end mt-2 vr-relaxed-xs md:vr-loose-sm"
    :type="[ 'email', 'location' ]"
    item-class="mr-4"
    icon-class="text-white print:text-gray-800"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import Contact from '@/components/Contact.vue'
export default Vue.extend({
  components: { Contact }
})
</script>

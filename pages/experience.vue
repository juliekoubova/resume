<template>
  <div class="flex min-h-screen">
    <div class="flex-grow py-24">
      <div class="max-w-2xl mx-auto">
        <h1 class="sr-only">Professional Experience</h1>
        <timeline-item
          v-for="(item, index) of items"
          :key="item.key"
          :first="index === 0"
          :from="item.from"
          :to="item.to"
        >
          <h4 class="vr-loose-base font-bold">{{ item.name }}</h4>
          <div
            v-if="item.vendor"
            class="font-medium text-gray-600 vr-relaxed-sm"
          >{{ item.vendor }}</div>
          <div
            class="markdown-relaxed-sm break-words text-gray-800"
            v-html="item.html"
          />
        </timeline-item>
      </div>
    </div>
    <div
      class="flex-shrink-0 bg-pink-800 text-pink-100 px-12 hidden sm:block w-1/3 py-20"
    >
      <h3>Web</h3>
      <ul>
        <li>TypeScript</li>
        <li>Angular</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TimelineItem from '@/components/TimelineItem.vue'

const resolve = require.context('~/content/experience', false, /\.md$/)

interface ExperienceItem {
  from?: Date
  html: string
  key: string
  name: string
  vendor?: string
  to?: Date
}
export default Vue.extend({
  components: { TimelineItem },
  asyncData() {
    const items: ExperienceItem[] = []

    for (const key of resolve.keys()) {
      const data = resolve(key)
      const { attributes } = data

      items.push({
        name: key,
        ...attributes,
        from: attributes.from && new Date(attributes.from),
        to: attributes.to && new Date(attributes.to),
        key,
        html: data.html
      })
    }
    const FUTURE = new Date('2100-01-01')

    items.sort((a, b) => {
      const aTo = a.to || FUTURE
      const bTo = b.to || FUTURE

      return (aTo === bTo)
        ? Number(b.from || 0) - Number(a.from || 0)
        : Number(bTo) - Number(aTo)
    })

    return Promise.resolve({ items })
  }
})
</script>

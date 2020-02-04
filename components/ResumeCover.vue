<template>
  <adjust-vr class="screen:text-pink-100">
    <div
      ref="cover"
      class="screen:min-h-screen screen:bg-pink-800 screen:flex flex-col screen:px-2-safe md:px-8-safe"
    >
      <resume-cover-contacts />
      <div class="screen:flex flex-col flex-auto justify-center print:pt-12">
        <h2 class="vr-normal-xl md:vr-loose-2xl screen:text-pink-200">Hi!</h2>
        <h1
          class="vr-normal-2xl md:vr-loose-3xl font-bold tracking-wide"
        >
          I&rsquo;m Julie Koubová
        </h1>

        <p
          class="vr-relaxed-sm md:vr-loose-base mt-8 pb-8 screen:max-w-2xl screen:text-pink-200"
        >
          {{ description }}
        </p>
      </div>

      <div class="print:hidden mx-auto h-32">
        <transition name="fade">
          <scroll-link
            v-if="showScrollEnticer"
            aria-label="Continue reading..."
            href="#experience"
            class="block bounce px-12 py-10"
          >
            <fa :icon="['fas','chevron-down']" />
          </scroll-link>
        </transition>
      </div>

      <a id="experience" class="relative" style="top: -4rem;" />
    </div>

    <transition name="slide-up">
      <header
        v-show="showHeader"
        class="fixed print:hidden top-0 left-0 right-0 flex items-end bg-pink-800 px-4-safe pb-3 md:pb-4 z-10 shadow-lg"
      >
        <div class="flex-auto">
          <h1
            class="vr-normal-lg md:vr-normal-3xl font-medium tracking-wide"
          >
            Julie Koubová
          </h1>
        </div>
        <resume-cover-contacts />
      </header>
    </transition>
  </adjust-vr>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, transform 0.4s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-leave-to {
  transform: translateY(-3rem) scale(0.8);
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease-in;
}

.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(-100%);
}
</style>

<script lang='ts'>
import Vue from 'vue'

import AdjustVr from '@/components/AdjustVr.vue'
import ResumeCoverContacts from '@/components/ResumeCoverContacts.vue'
import ScrollLink from '@/components/ScrollLink.vue'

export default Vue.extend({
  components: {
    AdjustVr,
    ResumeCoverContacts,
    ScrollLink
  },
  props: {
    description: { type: String, default: '' }
  },

  data: () => ({
    observer: undefined as IntersectionObserver | undefined,
    showHeader: false,
    showScrollEnticer: true
  }),

  mounted() {
    if (this.$isServer) {
      return
    }

    this.observer = new IntersectionObserver(this.handleIntersectChange, {
      threshold: [0, 0.2, 0.8]
    })
    this.observer.observe(this.$refs.cover as Element)
  },

  methods: {
    handleIntersectChange([e]: IntersectionObserverEntry[]) {
      this.showHeader = !e.isIntersecting || e.intersectionRatio < 0.2
      this.showScrollEnticer = e.intersectionRatio >= 0.8
    }
  }
})
</script>

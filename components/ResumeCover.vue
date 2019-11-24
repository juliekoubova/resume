<template>
  <adjust-vr class="text-pink-100">
    <div class="h-screen bg-pink-800 flex flex-col px-2 md:px-10">
      <resume-cover-contacts />
      <div class="flex-auto flex flex-col justify-center">
        <h2 class="vr-loose-2xl text-pink-200">Hi!</h2>
        <h1 class="vr-loose-3xl font-bold tracking-wide">
          <span>I&rsquo;m</span>
          <span>Julie Koubová</span>
        </h1>

        <p ref="para" class="vr-loose-base mt-8 max-w-xl text-pink-200">
          I&rsquo;m a software developer based in Prague. My areas of expertise
          encompass a wide range of platforms and technologies: from creating
          beautiful and accessible web apps, to cloud back-end development,
          to low level C/C++ systems programming.
        </p>
      </div>

      <div class="mx-auto h-32">
        <transition name="fade">
          <scroll-link
            v-if="scrollY < 5"
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
      <div
        v-show="scrollY >= showFixedHeaderAt && scrollDelta < 0"
        class="fixed top-0 left-0 right-0 flex justify-end bg-pink-800 pl-4 md:pl-10 pb-4 z-10 shadow-lg"
      >
        <div class="flex-auto">
          <h1
            class="vr-normal-lg md:vr-normal-3xl font-bold tracking-wide"
          >Julie Koubová</h1>
        </div>
        <resume-cover-contacts />
      </div>
    </transition>

    <global-events @scroll.passive="handleScroll()" />
    <global-events target="window" @resize.passive="handleResize()" />
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
  transform: translateY(-15rem) scale(16);
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
import GlobalEvents from 'vue-global-events'
import AdjustVr from '@/components/AdjustVr.vue'
import ResumeCoverContacts from '@/components/ResumeCoverContacts.vue'
import ScrollLink from '@/components/ScrollLink.vue'

export default Vue.extend({
  components: {
    AdjustVr,
    GlobalEvents,
    ResumeCoverContacts,
    ScrollLink
  },
  data: () => ({
    scrollDelta: 0,
    scrollY: 0,
    showFixedHeaderAt: 0
  }),

  mounted() {
    if (!this.$isServer) {
      this.handleResize()
    }
  },

  methods: {
    handleScroll() {
      this.scrollDelta = window.scrollY - this.scrollY
      this.scrollY = window.scrollY
    },

    handleResize() {
      const para = this.$refs.para as Element
      const rect = para.getBoundingClientRect()
      this.showFixedHeaderAt = rect.bottom
    }
  }
})
</script>

<template>
  <adjust-vr class="text-pink-100">
    <div class="min-h-screen bg-pink-800 flex flex-col px-2-safe md:px-8-safe">
      <resume-cover-contacts />
      <div class="flex-auto flex flex-col justify-center">
        <h2 class="vr-normal-xl md:vr-loose-2xl text-pink-200">Hi!</h2>
        <h1 class="vr-normal-2xl md:vr-loose-3xl font-bold tracking-wide">I&rsquo;m Julie Koubová</h1>

        <p ref="para" class="vr-relaxed-sm md:vr-loose-base mt-8 max-w-xl text-pink-200">
          I&rsquo;m a software developer based in Prague. My areas of expertise
          encompass a wide range of platforms and technologies: from creating
          beautiful and accessible web apps, to cloud back-end development,
          to low level C/C++ systems programming.
        </p>
      </div>

      <div class="mx-auto h-32">
        <transition name="fade">
          <scroll-link
            v-if="scrollY < 64"
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
        v-show="scrollY >= showFixedHeaderAt"
        class="fixed top-0 left-0 right-0 flex justify-end bg-pink-800 px-4-safe pb-4 z-10 shadow-lg"
      >
        <div class="flex-auto">
          <h1
            class="vr-normal-lg md:vr-normal-3xl tracking-wide"
          >Julie Koubová</h1>
        </div>
        <resume-cover-contacts />
      </header>
    </transition>

    <global-events
      target="window"
      @resize.passive="handleResize()"
      @orientationchange.passive="handleResize()"
    />
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
    rafId: undefined as number | undefined,
    scrollDelta: 0,
    scrollY: 0,
    showFixedHeaderAt: undefined as number | undefined
  }),

  created() {
    if (!this.$isServer) {
      this.rafId = requestAnimationFrame(this.updateFrame)
    }
  },

  beforeDestroy() {
    if (this.rafId !== undefined) {
      cancelAnimationFrame(this.rafId)
    }
  },

  methods: {
    updateFrame() {
      this.scrollDelta = window.scrollY - this.scrollY
      this.scrollY = window.scrollY

      if (this.showFixedHeaderAt === undefined) {
        const para = this.$refs.para as Element
        const rect = para.getBoundingClientRect()
        this.showFixedHeaderAt = window.scrollY + rect.bottom
      }

      this.rafId = requestAnimationFrame(this.updateFrame)
    },

    handleResize() {
      this.showFixedHeaderAt = undefined
    }
  }
})
</script>

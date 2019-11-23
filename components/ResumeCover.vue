<template>
  <adjust-height class="min-h-screen relative bg-pink-800 flex flex-col px-2 md:px-10">
    <div class="flex-auto flex flex-col justify-center">
      <h2 class="vr-loose-2xl text-pink-200">Hi!</h2>
      <h1 class="vr-loose-3xl text-pink-100 font-bold tracking-wide">
        <span>I&rsquo;m</span>
        <span>Julie Koubová</span>
      </h1>

      <p class="vr-loose-base mt-8 max-w-xl text-pink-200">
        <span>I&rsquo;m a</span>
        <span>software developer</span>
        <span>
          based in Prague. My areas of expertise encompass a wide range
          of platforms and technologies: from creating beautiful
          and accessible web apps, to cloud back-end development,
          to low level C/C++ systems programming.
        </span>
      </p>
    </div>
    <div class="text-white mx-auto bounce">
      <a href="#experience" class="px-12 py-10">
        <fa :icon="['fa','chevron-down']" />
      </a>
    </div>

    <contact
      class="absolute top-0 right-0 flex flex-wrap justify-end vr-loose-sm text-white"
      :type="[ 'phone', 'email', 'location' ]"
      item-class="mr-4"
      icon-class="text-white print:text-gray-800"
    />
  </adjust-height>
</template>

<script lang='ts'>
import AdjustHeight from '@/components/AdjustHeight.vue'
import Contact from '@/components/Contact.vue'

export default {
  components: { AdjustHeight, Contact }
}
</script>

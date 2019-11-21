<template>
  <div class="flex flex-col">
    <div class="bg-pink-800">
      <div class="m-6 lg:m-20">
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
            and accessible web apps; to cloud back-end development,
            to low level C/C++ systems programming.
          </span>
        </p>
      </div>
    </div>

    <footer class="flex-none flex justify-between vr-loose-base mx-20">
      <contact type="email" />
      <contact type="location" />
    </footer>
  </div>
</template>

<script lang='ts'>
import Contact from '@/components/Contact.vue'

export default {
  components: {
    Contact
  }
}
</script>

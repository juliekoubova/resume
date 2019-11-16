<template>
  <div class="h-screen flex flex-col">
    <div class="flex-grow bg-pink-800">
      <div class="m-6 lg:m-20 vertical-rhythm-debug">
        <h2 class="vr-loose-2xl text-pink-200">Hi!</h2>
        <h1
          class="vr-loose-3xl text-pink-100 font-bold tracking-wide"
        >I&rsquo;m Julie Koubová</h1>

        <p class="vr-loose-base mt-8 max-w-xl text-pink-200">
          I&rsquo;m a software developer based in Prague. My areas of
          expertise encompass a wide range of platforms and technologies: from
          creating modern, responsive, and accessible web user experiences and cloud
          back-end development, to low level C/C++ systems programming.
        </p>
      </div>
    </div>

    <footer class="flex-shrink-0 mx-20 my-10">
      <Contact />
    </footer>
  </div>
</template>

<script lang='ts'>
import Contact from '~/components/Contact.vue'

export default {
  components: {
    Contact
  }
}
</script>

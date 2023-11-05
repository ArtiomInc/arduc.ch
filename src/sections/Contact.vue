<script setup lang="ts">
import GithubBackgroundSvg from '../assets/icons/github_background.svg';
import LinkedinBackgroundSvg from '../assets/icons/linkedin_background.svg';
</script>
<template>
  <section id="contact" class="w-full my-20 mt-24">
    <div class="text-center">
      <h2 v-motion-slide-visible-once-bottom class="mb-6">Contact</h2>
      <div v-motion-slide-visible-once-bottom class="flex justify-center gap-3">
        <a href="https://github.com/ArtiomInc" target="_blank">
          <div
            class="bg-[var(--solid)] rounded-full hover:bg-[var(--border)] flex items-center w-fit pl-[5px] pr-2 py-1 gap-1.5"
          >
            <img class="h-6 w-6" :src="GithubBackgroundSvg" alt="" />
            <p class="text-[var(--background)] font-bold">github</p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/artiom-duc/" target="_blank"
          ><div
            class="bg-[var(--solid)] rounded-full hover:bg-[var(--border)] flex items-center w-fit px-2.5 py-1 gap-1.5"
          >
            <img class="h-6 w-6" :src="LinkedinBackgroundSvg" alt="" />
            <p class="text-[var(--background)] font-bold">linkedin</p>
          </div></a
        >
      </div>
    </div>
  </section>
</template>

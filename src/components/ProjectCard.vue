<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps([
  'name',
  'description',
  'linkName',
  'linkUrl',
  'technoName',
  'technoImage',
  'technoImageHeight',
]);
</script>

<template>
  <div
    v-motion-slide-visible-once-bottom
    class="w-full max-w-[530px] h-fit bg-[var(--interactive)] p-4 rounded-xl"
  >
    <h3>{{ props.name }}</h3>
    <div>
      {{ props.description }}
    </div>
    <a
      class="flex items-center gap-1 text-lg font-bold"
      :href="linkUrl"
      target="_blank"
      >{{ props.linkName }}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        viewBox="0 -960 960 960"
        width="20"
        fill="#b1f1cb"
      >
        <path
          d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"
        /></svg
    ></a>
    <div class="mt-2 flex flex-wrap gap-2">
      <div
        v-for="(item, index) in props.technoName"
        class="h-6 flex gap-1.5 w-fit items-center px-2 bg-[var(--contain)] rounded-full"
      >
        <img
          :class="technoImageHeight[index] ? technoImageHeight[index] : ''"
          :src="props.technoImage[index]"
          :alt="String(item)"
        />
        <p class="text-[var(--background)] font-bold" v-if="item != undefined">
          {{ item }}
        </p>
      </div>
    </div>
  </div>
</template>

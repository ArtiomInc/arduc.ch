<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  premium: {
    type: Boolean,
    required: false,
  },
});
</script>

<template>
  <li v-motion-slide-visible-once-bottom class="flex items-center gap-1.5">
    <img
      class="h-5"
      style="filter: grayscale(100%)"
      :src="'/src/assets/images/' + props.image"
      :alt="props.name"
    />
    <p
      v-if="props.premium"
      class="bg-clip-text text-transparent bg-gradient-to-r from-[#33b074] to-emerald-700 font-extrabold"
    >
      {{ props.name }}
    </p>
    <p v-else>{{ props.name }}</p>
  </li>
</template>

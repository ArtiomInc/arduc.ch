<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({ name: String, image: String, premium: Boolean });
</script>

<template>
  <li v-motion-slide-visible-once-bottom class="flex items-center gap-1.5">
    <img class="h-5 antialiased" :src="props.image" :alt="props.name" />
    <p
      v-if="props.premium"
      class="bg-clip-text text-transparent bg-gradient-to-r from-[#33b074] to-emerald-700 font-extrabold"
    >
      {{ props.name }}
    </p>
    <p v-else>{{ props.name }}</p>
  </li>
</template>

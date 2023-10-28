<script setup lang="ts">
import Home from './sections/Home.vue';
import SkillsSection from './sections/Skills.vue';
import ProjectsSection from './sections/Projects.vue';
import ContactSection from './sections/Contact.vue';
import CreditSection from './sections/Credit.vue';
import Menu from './components/Menu.vue';
import { ref, Ref } from 'vue';

const menuDisplay: Ref<boolean> = ref(false);

const openMenu = () => {
  menuDisplay.value = true;
  document.body.classList.add('menu-open');
};

const closeMenu = () => {
  menuDisplay.value = false;
  document.body.classList.remove('menu-open');
};
</script>

<template>
  <Home @openMenu="openMenu"></Home>
  <SkillsSection></SkillsSection>
  <ProjectsSection></ProjectsSection>
  <ContactSection></ContactSection>
  <CreditSection></CreditSection>
  <Menu v-if="menuDisplay" @close="closeMenu"></Menu>
</template>

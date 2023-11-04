<script setup lang="ts">
import SkillsName from '../components/SkillsName.vue';
</script>

<template>
  <section id="skills" class="w-full my-20 animation-appear">
    <div>
      <h2 v-motion-slide-visible-once-bottom>Skills</h2>
      <div class="flex flex-wrap justify-center">
        <div class="px-10 py-4">
          <h3 v-motion-slide-visible-once-bottom class="text-start mb-2">
            Conception
          </h3>
          <ul class="flex flex-col gap-2">
            <SkillsName
              name="SolidWorks"
              image="solidworks_accessible.svg"
              premium
            ></SkillsName>
            <SkillsName
              name="Inventor Pro"
              image="inventor_pro_accessible.svg"
            ></SkillsName>
            <SkillsName
              name="Qelectrotech"
              image="qelectrotech_accessible.svg"
            ></SkillsName>
            <SkillsName name="Eplan" image="eplan_accessible.svg"></SkillsName>
          </ul>
        </div>
        <div class="px-10 py-4">
          <h3 v-motion-slide-visible-once-bottom class="text-start mb-2">
            Programmation
          </h3>
          <ul class="flex flex-col gap-2">
            <SkillsName
              name="TwinCAT"
              image="twincat_accessible.svg"
              premium
            ></SkillsName>
            <SkillsName
              name="TIA Portal"
              image="tia_portal_accessible.svg"
            ></SkillsName>
            <SkillsName
              name="Studio 5000"
              image="rockwell_accessible.svg"
            ></SkillsName>
            <SkillsName
              name="GX Works"
              image="gx_works_accessible.svg"
            ></SkillsName>
          </ul>
        </div>
        <div class="px-10 py-4">
          <h3 v-motion-slide-visible-once-bottom class="text-start mb-2">
            Frontend
          </h3>
          <ul class="flex flex-col gap-2">
            <SkillsName
              name="Typescript"
              image="typescript_accessible.svg"
            ></SkillsName>
            <SkillsName
              name="Vue.js"
              image="vue_accessible.svg"
              premium
            ></SkillsName>
            <SkillsName
              name="TailwindCSS"
              image="tailwind_accessible.svg"
            ></SkillsName>
          </ul>
        </div>
        <div class="px-10 py-4">
          <h3 v-motion-slide-visible-once-bottom class="text-start mb-2">
            Backend
          </h3>
          <ul class="flex flex-col gap-2">
            <SkillsName
              name="Python"
              image="python_accessible.svg"
              premium
            ></SkillsName>
            <SkillsName
              name="NodeJS"
              image="nodejs_accessible.svg"
            ></SkillsName>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

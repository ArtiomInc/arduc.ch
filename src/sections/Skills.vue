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
              image="solidworks.png"
              premium
            ></SkillsName>
            <SkillsName name="Inventor Pro" image="autodesk.png"></SkillsName>
            <SkillsName
              name="Qelectrotech"
              image="qelectrotech.png"
            ></SkillsName>
            <SkillsName name="Eplan" image="eplan.png"></SkillsName>
          </ul>
        </div>
        <div class="px-10 py-4">
          <h3 v-motion-slide-visible-once-bottom class="text-start mb-2">
            Programmation
          </h3>
          <ul class="flex flex-col gap-2">
            <SkillsName name="TwinCAT" image="twincat.png" premium></SkillsName>
            <SkillsName
              name="TIA Portal"
              image="tia_portal_v16.jpg"
            ></SkillsName>
            <SkillsName name="Studio 5000" image="rockwell.png"></SkillsName>
            <SkillsName name="GX Works" image="gx_works.png"></SkillsName>
          </ul>
        </div>
        <div class="px-10 py-4">
          <h3 v-motion-slide-visible-once-bottom class="text-start mb-2">
            Frontend
          </h3>
          <ul class="flex flex-col gap-2">
            <SkillsName name="Typescript" image="typescript.png"></SkillsName>
            <SkillsName name="VueJS" image="vue.png" premium></SkillsName>
            <SkillsName name="TailwindCSS" image="tailwindcss.png"></SkillsName>
          </ul>
        </div>
        <div class="px-10 py-4">
          <h3 v-motion-slide-visible-once-bottom class="text-start mb-2">
            Backend
          </h3>
          <ul class="flex flex-col gap-2">
            <SkillsName name="Python" image="python.png" premium></SkillsName>
            <SkillsName name="NodeJS" image="nodejs.png"></SkillsName>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

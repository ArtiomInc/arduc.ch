<script setup lang="ts">
import SkillsName from '../components/SkillsName.vue';
import SolidWorksGradiantSvg from '../assets/icons/solidworks_gradiant.svg';
import InventorProAccessibleSvg from '../assets/icons/inventor_pro_accessible.svg';
import QelectrotechAccessibleSvg from '../assets/icons/qelectrotech_accessible.svg';
import EplanAccessibleSvg from '../assets/icons/eplan_accessible.svg';
import TwincatGradiantSvg from '../assets/icons/twincat_gradiant.svg';
import TiaPortalAccessibleSvg from '../assets/icons/tia_portal_accessible.svg';
import RockwellAccessibleSvg from '../assets/icons/rockwell_accessible.svg';
import GxWorksAccessibleSvg from '../assets/icons/gx_works_accessible.svg';
import TypescriptAccessibleSvg from '../assets/icons/typescript_accessible.svg';
import VueGradiantSvg from '../assets/icons/vue_gradiant.svg';
import TailwindAccessibleSvg from '../assets/icons/tailwind_accessible.svg';
import PythonGradiantSvg from '../assets/icons/python_gradiant.svg';
import NodeJSAccessibleSvg from '../assets/icons/nodejs_accessible.svg';
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
              :image="SolidWorksGradiantSvg"
              premium
            ></SkillsName>
            <SkillsName
              name="Inventor Pro"
              :image="InventorProAccessibleSvg"
            ></SkillsName>
            <SkillsName
              name="Qelectrotech"
              :image="QelectrotechAccessibleSvg"
            ></SkillsName>
            <SkillsName name="Eplan" :image="EplanAccessibleSvg"></SkillsName>
          </ul>
        </div>
        <div class="px-10 py-4">
          <h3 v-motion-slide-visible-once-bottom class="text-start mb-2">
            Programmation
          </h3>
          <ul class="flex flex-col gap-2">
            <SkillsName
              name="TwinCAT"
              :image="TwincatGradiantSvg"
              premium
            ></SkillsName>
            <SkillsName
              name="TIA Portal"
              :image="TiaPortalAccessibleSvg"
            ></SkillsName>
            <SkillsName
              name="Studio 5000"
              :image="RockwellAccessibleSvg"
            ></SkillsName>
            <SkillsName
              name="GX Works"
              :image="GxWorksAccessibleSvg"
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
              :image="TypescriptAccessibleSvg"
            ></SkillsName>
            <SkillsName
              name="Vue.js"
              :image="VueGradiantSvg"
              premium
            ></SkillsName>
            <SkillsName
              name="TailwindCSS"
              :image="TailwindAccessibleSvg"
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
              :image="PythonGradiantSvg"
              premium
            ></SkillsName>
            <SkillsName name="NodeJS" :image="NodeJSAccessibleSvg"></SkillsName>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue';
import BeckhoffBackgroundSvg from '../assets/icons/beckhoff_background.svg';
import EthercatBackgroundSvg from '../assets/icons/ethercat_background.svg';
import AsyrilBackgroundSvg from '../assets/icons/asyril_background.svg';
import SolidWorksBackgroundSvg from '../assets/icons/solidworks_background.svg';
import ElectronJSBackgroundSvg from '../assets/icons/electronjs_background.svg';
import VueBackgroundSvg from '../assets/icons/vue_background.svg';
import TypescriptBackgroundSvg from '../assets/icons/typescript_background.svg';
import TailwindBackgroundSvg from '../assets/icons/tailwind_background.svg';
import NodeJSBackgroundSvg from '../assets/icons/nodejs_background.svg';
import FanucBackgroundSvg from '../assets/icons/fanuc_background.svg';
</script>

<template>
  <section id="projects" class="w-full my-20 mt-24">
    <div>
      <h2 v-motion-slide-visible-once-bottom class="mb-10">Projects</h2>
      <div class="flex flex-row justify-center flex-wrap gap-4">
        <ProjectCard
          name="Mini robotic cell"
          description="A demonstrator showing a pogopin assembly application using an
            Asycube 50 with EYE+ and a linear axis system. The parts are
            recirculated by blowing, enabling the demonstrator to operate
            continuously. The whole system is controlled via EtherCAT fiedbus."
          linkName="youtube.com"
          linkUrl="https://youtu.be/z7kOAKYW_zc?si=XDrSmpjg_xwDvDYV"
          :technoName="[undefined, 'EtherCAT', undefined, 'SolidWorks']"
          :technoImage="[
            BeckhoffBackgroundSvg,
            EthercatBackgroundSvg,
            AsyrilBackgroundSvg,
            SolidWorksBackgroundSvg,
          ]"
          :technoImageHeight="['h-4', 'h-4', 'h-5', 'h-4']"
        ></ProjectCard>
        <ProjectCard
          name="WorkMemo app"
          description='I have developed a "todo" and note-taking application built on the
            Electron framework, making it a cross-platform desktop application.
            Built using technologies such as Electron, Vue, Node, Typescript,
            TailwindCSS, and more, it provides a responsive user interface and a
            pleasant experience for users.'
          linkName="github.com"
          linkUrl="https://github.com/ArtiomInc/WorkMemo-App"
          :technoName="[
            'ElectronJS',
            'Vue.js',
            'Typescript',
            'TailwindCSS',
            'NodeJS',
          ]"
          :technoImage="[
            ElectronJSBackgroundSvg,
            VueBackgroundSvg,
            TypescriptBackgroundSvg,
            TailwindBackgroundSvg,
            NodeJSBackgroundSvg,
          ]"
          :technoImageHeight="['h-4', 'h-4', 'h-4', 'h-4', 'h-4']"
        ></ProjectCard>
        <ProjectCard
          name="Asyril Fanuc demonstrator"
          description="A demonstrator showing different scenario applications with a Fanuc
            Scara robot and several Asycube 240 with EYE+ a smart control
            system."
          linkName="youtube.com"
          linkUrl="https://youtu.be/sHExxx6mZWM?si=k_jouMx2vHoKNlKt"
          :technoName="[undefined, undefined, undefined]"
          :technoImage="[
            BeckhoffBackgroundSvg,
            FanucBackgroundSvg,
            AsyrilBackgroundSvg,
          ]"
          :technoImageHeight="['h-4', 'h-4', 'h-5']"
        ></ProjectCard>
        <ProjectCard
          name="Terminal web"
          description="This project is an online terminal application that provides a user
            interface for entering commands and receiving responses in return."
          linkName="term.arduc.ch"
          linkUrl="https://term.arduc.ch"
          :technoName="['Vue.js', 'Typescript']"
          :technoImage="[VueBackgroundSvg, TypescriptBackgroundSvg]"
          :technoImageHeight="['h-4', 'h-4']"
        ></ProjectCard>
      </div>
    </div>
  </section>
</template>

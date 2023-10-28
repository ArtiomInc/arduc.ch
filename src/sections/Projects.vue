<script setup lang="ts">
import ProjectCard from '../components/ProjectCard.vue';
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
          :technoName="['Beckhoff', 'Ethercat', 'Asyril', 'SolidWorks']"
          :technoImage="[
            'twincat.png',
            'ethercat.png',
            'asyril.png',
            'solidworks.png',
          ]"
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
            'VueJS',
            'Typescript',
            'TailwindCSS',
            'NodejS',
          ]"
          :technoImage="[
            'electronjs.png',
            'vue.png',
            'typescript.png',
            'tailwindcss.png',
            'nodejs.png',
          ]"
        ></ProjectCard>
        <ProjectCard
          name="Asyril Fanuc demonstrator"
          description="A demonstrator showing different scenario applications with a Fanuc
            Scara robot and several Asycube 240 with EYE+ a smart control
            system."
          linkName="youtube.com"
          linkUrl="https://youtu.be/sHExxx6mZWM?si=k_jouMx2vHoKNlKt"
          :technoName="['Beckhoff', 'Fanuc', 'Asyril']"
          :technoImage="['twincat.png', 'fanuc.png', 'asyril.png']"
        ></ProjectCard>
        <ProjectCard
          name="Terminal web"
          description="This project is an online terminal application that provides a user
            interface for entering commands and receiving responses in return."
          linkName="term.arduc.ch"
          linkUrl="https://term.arduc.ch"
          :technoName="['VueJS', 'Typescript']"
          :technoImage="['vue.png', 'typescript.png']"
        ></ProjectCard>
      </div>
    </div>
  </section>
</template>

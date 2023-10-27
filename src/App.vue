<script setup lang="ts">
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
  <section
    id=""
    class="w-full min-h-screen flex flex-col justify-between items-center"
  >
    <div class="w-full flex justify-end p-3">
      <div class="cursor-pointer" @click="openMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -960 960 960"
          width="40"
          height="40"
          fill="#b1f1cb"
        >
          <path
            d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
          />
        </svg>
      </div>
    </div>
    <div class="flex flex-col gap-4 md:flex-row-reverse items-center">
      <img
        class="w-[250px] md:w-[350px] h-full mx-auto object-cover rounded-full"
        src="/src/assets/images/artiom_duc.jpg"
        alt="Artiom Duc"
      />
      <div>
        <p class="text-xl">Hey there ! I'm</p>
        <h1>Artiom Duc</h1>
        <p class="text-3xl">
          <strong>Industrial Software Technician.</strong> Explore here my
          portfolio and innovation lab.
        </p>
      </div>
    </div>
    <div class="w-full p-3">
      <div class="animate-bounce rounded-full flex items-center justify-center">
        <svg
          class="w-10 h-10"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </section>
  <section id="skills" class="w-full my-20 animation-appear">
    <div>
      <h2 v-motion-slide-visible-once-bottom>Skills</h2>
      <div class="flex flex-wrap justify-center">
        <div class="px-10 py-4">
          <h3 v-motion-slide-visible-once-bottom class="text-start mb-2">
            Conception
          </h3>
          <ul class="flex flex-col gap-2">
            <li
              v-motion-slide-visible-once-bottom
              class="flex items-center gap-1.5"
            >
              <img
                class="h-5"
                style="filter: grayscale(100%)"
                src="/src/assets/images/solidworks.png"
                alt="Solidworks"
              />
              <p
                class="bg-clip-text text-transparent bg-gradient-to-r from-[#33b074] to-emerald-700 font-extrabold"
              >
                SolidWorks
              </p>
            </li>
            <li
              v-motion-slide-visible-once-bottom
              class="flex items-center gap-1.5"
            >
              <img
                class="h-5"
                style="filter: grayscale(100%) hue-rotate(90deg)"
                src="/src/assets/images/autodesk.png"
                alt="Inventor Pro"
              />
              <p>Inventor Pro</p>
            </li>
            <li
              v-motion-slide-visible-once-bottom
              class="flex items-center gap-1.5"
            >
              <img
                class="h-5"
                style="filter: grayscale(100%)"
                src="/src/assets/images/qelectrotech.png"
                alt="Qelectrotech"
              />
              <p>Qelectrotech</p>
            </li>
            <li
              v-motion-slide-visible-once-bottom
              class="flex items-center gap-1.5"
            >
              <img
                class="h-4"
                style="filter: grayscale(100%)"
                src="/src/assets/images/eplan.png"
                alt="Eplan"
              />
              <p>Eplan</p>
            </li>
          </ul>
        </div>
        <div class="px-10 py-4">
          <h3 v-motion-slide-visible-once-bottom class="text-start mb-2">
            Programmation
          </h3>
          <ul class="flex flex-col gap-2">
            <li
              v-motion-slide-visible-once-bottom
              class="flex items-center gap-1.5"
            >
              <img
                class="h-5"
                style="filter: grayscale(100%) hue-rotate(90deg)"
                src="/src/assets/images/twincat.png"
                alt="TwinCAT"
              />
              <p
                class="bg-clip-text text-transparent bg-gradient-to-r from-[#33b074] to-emerald-700 font-extrabold"
              >
                TwinCAT
              </p>
            </li>
            <li
              v-motion-slide-visible-once-bottom
              class="flex items-center gap-1.5"
            >
              <img
                class="h-5"
                style="filter: grayscale(100%) hue-rotate(90deg)"
                src="/src/assets/images/tia_portal_v16.jpg"
                alt="TIA portal V16"
              />
              <p>TIA Portal</p>
            </li>
            <li
              v-motion-slide-visible-once-bottom
              class="flex items-center gap-1.5"
            >
              <img
                class="h-5"
                style="filter: grayscale(100%) hue-rotate(90deg)"
                src="/src/assets/images/rockwell.png"
                alt="Studo 5000"
              />
              <p>Studio 5000</p>
            </li>
            <li
              v-motion-slide-visible-once-bottom
              class="flex items-center gap-1.5"
            >
              <img
                class="h-5 rounded-[2px]"
                style="filter: grayscale(100%) hue-rotate(90deg)"
                src="/src/assets/images/gx_works.png"
                alt="GX Works"
              />
              <p>GX Works</p>
            </li>
          </ul>
        </div>
        <div class="px-10 py-4">
          <h3 v-motion-slide-visible-once-bottom class="text-start mb-2">
            Frontend
          </h3>
          <ul class="flex flex-col gap-2">
            <li
              v-motion-slide-visible-once-bottom
              class="flex items-center gap-1.5"
            >
              <img
                class="h-5"
                style="filter: grayscale(100%) hue-rotate(90deg)"
                src="/src/assets/images/typescript.png"
                alt="Typescript"
              />
              <p>Typescript</p>
            </li>
            <li
              v-motion-slide-visible-once-bottom
              class="flex items-center gap-1.5"
            >
              <img
                class="h-4"
                style="filter: grayscale(100%) hue-rotate(90deg)"
                src="/src/assets/images/vue.png"
                alt="Vue"
              />
              <p
                class="bg-clip-text text-transparent bg-gradient-to-r from-[#33b074] to-emerald-700 font-extrabold"
              >
                Vue
              </p>
            </li>
            <li
              v-motion-slide-visible-once-bottom
              class="flex items-center gap-1"
            >
              <img
                class="h-3"
                style="filter: grayscale(100%) hue-rotate(90deg)"
                src="/src/assets/images/tailwindcss.png"
                alt="Tailwind"
              />
              <p>Tailwind</p>
            </li>
          </ul>
        </div>
        <div class="px-10 py-4">
          <h3 v-motion-slide-visible-once-bottom class="text-start mb-2">
            Backend
          </h3>
          <ul class="flex flex-col gap-2">
            <li
              v-motion-slide-visible-once-bottom
              class="flex items-center gap-1.5"
            >
              <img
                class="h-5"
                style="filter: grayscale(100%) hue-rotate(90deg)"
                src="/src/assets/images/python.png"
                alt="Python"
              />
              <p
                class="bg-clip-text text-transparent bg-gradient-to-r from-[#33b074] to-emerald-700 font-extrabold"
              >
                Python
              </p>
            </li>
            <li
              v-motion-slide-visible-once-bottom
              class="flex items-center gap-1.5"
            >
              <img
                class="h-5"
                style="filter: grayscale(100%) hue-rotate(90deg)"
                src="/src/assets/images/nodejs.png"
                alt="NodeJS"
              />
              <p>NodeJS</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section id="projects" class="w-full my-20 mt-24">
    <div>
      <h2 v-motion-slide-visible-once-bottom class="mb-10">Projects</h2>
      <div class="flex flex-row justify-center flex-wrap gap-4">
        <div
          v-motion-slide-visible-once-bottom
          class="w-full max-w-[530px] h-fit bg-[var(--interactive)] p-4 rounded-xl"
        >
          <h3>Mini robotic cell</h3>
          <div>
            A demonstrator showing a pogopin assembly application using an
            Asycube 50 with EYE+ and a linear axis system. The parts are
            recirculated by blowing, enabling the demonstrator to operate
            continuously. The whole system is controlled via EtherCAT fiedbus.
          </div>
          <a
            class="flex items-center gap-1 text-lg font-bold"
            href="https://youtu.be/z7kOAKYW_zc?si=XDrSmpjg_xwDvDYV"
            target="_blank"
            >youtube.com
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
              class="flex w-fit items-center px-1 bg-[var(--contain)] rounded-full"
            >
              <img
                class="h-4 mx-1"
                style="filter: grayscale(100%) hue-rotate(90deg)"
                src="/src/assets/images/twincat.png"
                alt="Beckhoff"
              />
              <p class="text-[var(--background)] font-bold mr-1">Beckhoff</p>
            </div>
            <div
              class="flex w-fit items-center px-1 bg-[var(--contain)] rounded-full"
            >
              <img
                class="h-4 ml-0.5 mr-1"
                style="filter: grayscale(100%) hue-rotate(90deg)"
                src="/src/assets/images/ethercat.png"
                alt="EtherCAT"
              />
              <p class="text-[var(--background)] font-bold mr-1">EtherCAT</p>
            </div>
            <div
              class="flex w-fit items-center px-1 bg-[var(--contain)] rounded-full"
            >
              <img
                class="h-4 ml-1 mr-1"
                style="filter: grayscale(100%) hue-rotate(90deg)"
                src="/src/assets/images/asyril.png"
                alt="Asyril"
              />
              <p class="text-[var(--background)] font-bold mr-1">Asyril</p>
            </div>
            <div
              class="flex w-fit items-center px-1 bg-[var(--contain)] rounded-full"
            >
              <img
                class="h-4 ml-1 mr-1"
                style="filter: grayscale(100%) hue-rotate(90deg)"
                src="/src/assets/images/solidworks.png"
                alt="SolidWodks"
              />
              <p class="text-[var(--background)] font-bold mr-1">SolidWorks</p>
            </div>
          </div>
        </div>
        <div
          v-motion-slide-visible-once-bottom
          class="w-full max-w-[530px] h-fit bg-[var(--interactive)] p-4 rounded-xl"
        >
          <h3>WorkMemo app</h3>
          <div>
            I have developed a "todo" and note-taking application built on the
            Electron framework, making it a cross-platform desktop application.
            Built using technologies such as Electron, Vue, Node, Typescript,
            TailwindCSS, and more, it provides a responsive user interface and a
            pleasant experience for users.
          </div>
          <a
            class="flex items-center gap-1 text-lg font-bold"
            href="https://github.com/ArtiomInc/WorkMemo-App"
            target="_blank"
            >github.com
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
              class="flex w-fit items-center px-1 bg-[var(--contain)] rounded-full"
            >
              <img
                class="h-4 mr-1"
                style="filter: grayscale(100%) hue-rotate(90deg)"
                src="/src/assets/images/electronjs.png"
                alt="ElectronJS"
              />
              <p class="text-[var(--background)] font-bold mr-1">ElectronJS</p>
            </div>
            <div
              class="flex w-fit items-center px-1 bg-[var(--contain)] rounded-full"
            >
              <img
                class="h-4 ml-0.5 mr-1"
                style="filter: grayscale(100%) hue-rotate(90deg)"
                src="/src/assets/images/vue.png"
                alt="VueJS"
              />
              <p class="text-[var(--background)] font-bold mr-1">VueJS</p>
            </div>
            <div
              class="flex w-fit items-center px-1 bg-[var(--contain)] rounded-full"
            >
              <img
                class="h-4 ml-1 mr-1"
                style="filter: grayscale(100%) hue-rotate(90deg)"
                src="/src/assets/images/typescript.png"
                alt="Typescript"
              />
              <p class="text-[var(--background)] font-bold mr-1">Typescript</p>
            </div>
            <div
              class="flex w-fit items-center px-1 bg-[var(--contain)] rounded-full"
            >
              <img
                class="h-4 mr-1"
                style="filter: grayscale(100%) hue-rotate(90deg)"
                src="/src/assets/images/tailwindcss.png"
                alt="TailwindCSS"
              />
              <p class="text-[var(--background)] font-bold mr-1">TailwindCSS</p>
            </div>
            <div
              class="flex w-fit items-center px-1 bg-[var(--contain)] rounded-full"
            >
              <img
                class="h-4 ml-0.5 mr-1"
                style="filter: grayscale(100%) hue-rotate(90deg)"
                src="/src/assets/images/nodejs.png"
                alt="NodeJS"
              />
              <p class="text-[var(--background)] font-bold mr-1">NodeJS</p>
            </div>
          </div>
        </div>
        <div
          v-motion-slide-visible-once-bottom
          class="w-full max-w-[530px] h-fit bg-[var(--interactive)] p-4 rounded-xl"
        >
          <h3>Asyril Fanuc demonstrator</h3>
          <div>
            A demonstrator showing different scenario applications with a Fanuc
            Scara robot and several Asycube 240 with EYE+ a smart control
            system.
          </div>
          <a
            class="flex items-center gap-1 text-lg font-bold"
            href="https://youtu.be/sHExxx6mZWM?si=k_jouMx2vHoKNlKt"
            target="_blank"
            >youtube.com
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
              class="flex w-fit items-center px-1 bg-[var(--contain)] rounded-full"
            >
              <img
                class="h-4 mx-1"
                style="filter: grayscale(100%) hue-rotate(90deg)"
                src="/src/assets/images/twincat.png"
                alt="Beckhoff"
              />
              <p class="text-[var(--background)] font-bold mr-1">Beckhoff</p>
            </div>
            <div
              class="flex w-fit items-center px-1 bg-[var(--contain)] rounded-full"
            >
              <img
                class="h-4 ml-0.5 mr-1"
                style="filter: grayscale(100%) hue-rotate(90deg)"
                src="/src/assets/images/fanuc.png"
                alt="Fanuc"
              />
              <p class="text-[var(--background)] font-bold mr-1">Fanuc</p>
            </div>
            <div
              class="flex w-fit items-center px-1 bg-[var(--contain)] rounded-full"
            >
              <img
                class="h-4 ml-1 mr-1"
                style="filter: grayscale(100%) hue-rotate(90deg)"
                src="/src/assets/images/asyril.png"
                alt="Asyril"
              />
              <p class="text-[var(--background)] font-bold mr-1">Asyril</p>
            </div>
          </div>
        </div>
        <div
          v-motion-slide-visible-once-bottom
          class="w-full max-w-[530px] h-fit bg-[var(--interactive)] p-4 rounded-xl"
        >
          <h3>Terminal web</h3>
          <div>
            This project is an online terminal application that provides a user
            interface for entering commands and receiving responses in return.
          </div>
          <a
            class="flex items-center gap-1 text-lg font-bold"
            href="https://term.arduc.ch"
            target="_blank"
            >term.arduc.ch<svg
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
              class="flex w-fit items-center px-1 bg-[var(--contain)] rounded-full"
            >
              <img
                class="h-4 ml-0.5 mr-1"
                style="filter: grayscale(100%) hue-rotate(90deg)"
                src="/src/assets/images/vue.png"
                alt="VueJS"
              />
              <p class="text-[var(--background)] font-bold mr-1">VueJS</p>
            </div>
            <div
              class="flex w-fit items-center px-1 bg-[var(--contain)] rounded-full"
            >
              <img
                class="h-4 ml-1 mr-1"
                style="filter: grayscale(100%) hue-rotate(90deg)"
                src="/src/assets/images/typescript.png"
                alt="Typescript"
              />
              <p class="text-[var(--background)] font-bold mr-1">Typescript</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="contact" class="w-full my-20 mt-24">
    <div class="text-center">
      <h2 v-motion-slide-visible-once-bottom class="mb-6">Contact</h2>
      <div v-motion-slide-visible-once-bottom class="flex justify-center gap-3">
        <a href="https://github.com/ArtiomInc" target="_blank">
          <div
            class="bg-[var(--solid)] rounded-full hover:bg-[var(--border)] flex items-center w-fit pl-1.5 pr-2 py-1 gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            <p class="text-[var(--background)] font-bold">github</p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/artiom-duc/" target="_blank"
          ><div
            class="bg-[var(--solid)] rounded-full hover:bg-[var(--border)] flex items-center w-fit px-2 py-1 gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
              />
            </svg>
            <p class="text-[var(--background)] font-bold">linkedin</p>
          </div></a
        >
      </div>
    </div>
  </section>
  <footer
    v-motion-slide-visible-once-bottom
    id="footer"
    class="w-full my-16 mt-28 flex flex-col gap-3 items-center"
  >
    <div class="overflow-hidden" style="width: 165px">
      <div class="animate-rollbounce">
        <svg
          style="position: relative; max-width: unset; width: 180px"
          width="192"
          height="14"
          viewBox="0 0 192 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M-2.00012 6.99999C0.166593 0.333339 8.08317 0.333337 10.2499 6.99998C12.4166 13.6666 20.3331 13.6666 22.4999 6.99999C24.6666 0.333344 32.5832 0.333342 34.7499 6.99999C36.9166 13.6666 44.8331 13.6666 46.9999 6.99999C49.1666 0.333348 57.0832 0.333346 59.2499 6.99999C61.4166 13.6666 69.3331 13.6666 71.4999 7C73.6666 0.333352 81.5832 0.33335 83.7499 7C85.9166 13.6666 93.8332 13.6666 95.9999 7C98.1666 0.333356 106.083 0.333354 108.25 7C110.417 13.6666 118.333 13.6666 120.5 7.00001C122.667 0.333361 130.583 0.333358 132.75 7C134.917 13.6666 142.833 13.6667 145 7.00001C147.167 0.333365 155.083 0.333363 157.25 7.00001C159.417 13.6667 167.333 13.6667 169.5 7.00001C171.667 0.333369 179.583 0.333367 181.75 7.00001C183.917 13.6667 191.833 13.6667 194 7.00002"
              stroke="var(--interactive)"
              stroke-width="4"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="192" height="14" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
    <div>Built by Artiom Duc</div>
    <div>©Copyright 2023 - Artiom Duc</div>
  </footer>
  <Menu v-if="menuDisplay" @close="closeMenu"></Menu>
</template>

<style scoped></style>

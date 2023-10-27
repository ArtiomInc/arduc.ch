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
    class="w-full h-screen relative flex md:justify-between gap-8 md:gap-0 justify-center items-center flex-col md:flex-row-reverse"
  >
    <div class="">
      <img
        class="w-[18vh] md:w-[300px] h-full object-cover rounded-full"
        src="/src/assets/images/artiom_duc.jpg"
        alt="Artiom Duc"
      />
    </div>
    <div>
      <p class="text-xl">Hey there ! I'm</p>
      <h1>Artiom Duc</h1>
      <p class="text-3xl">
        <strong>Industrial Software Technician.</strong> Explore here my
        portfolio and innovation lab.
      </p>
      <div class="absolute bottom-5 left-0 flex justify-center w-full">
        <div
          class="animate-bounce shadow-lg rounded-full flex items-center justify-center"
        >
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
    </div>
    <!--menu for mobile-->
    <div
      class="block md:hidden absolute right-0 top-5 cursor-pointer"
      @click="openMenu"
    >
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
    <!--menu for desktop-->
    <div class="hidden p-5 md:block absolute top-0 left-0 w-full h-24">
      <ul
        class="flex gap-6 h-full flex-row justify-end items-center max-w-6xl mx-auto px-3"
      >
        <a href="" class="cursor-pointer flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            width="24"
            height="24"
            fill="#28684a"
          >
            <path
              d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"
            />
          </svg>
          <h4>Home</h4>
        </a>
        <a href="#skills" class="cursor-pointer flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            width="24"
            height="24"
            fill="#28684a"
          >
            <path
              d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"
            />
          </svg>
          <h4>Skills</h4>
        </a>
        <a href="#projects" class="cursor-pointer flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            width="24"
            height="24"
            fill="#28684a"
          >
            <path
              d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"
            />
          </svg>
          <h4>Projects</h4>
        </a>
        <a href="#contact" class="cursor-pointer flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            width="24"
            height="24"
            fill="#28684a"
          >
            <path
              d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"
            />
          </svg>
          <h4>Contact</h4>
        </a>
      </ul>
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
      <div class="flex flex-col sm:flex-row justify-between gap-4">
        <div
          v-motion-slide-visible-once-bottom
          class="w-full h-fit bg-[var(--interactive)] p-4 rounded-xl"
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
        <div
          v-motion-slide-visible-once-bottom
          class="w-full h-fit bg-[var(--interactive)] p-4 rounded-xl"
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
                class="h-4 mr-1"
                style="filter: grayscale(100%) hue-rotate(90deg)"
                src="/src/assets/images/nodejs.png"
                alt="NodeJS"
              />
              <p class="text-[var(--background)] font-bold mr-1">NodeJS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="contact" class="w-full my-20 mt-24">
    <div class="text-center">
      <h2 v-motion-slide-visible-once-bottom class="mb-6">Contact</h2>
      <a href="https://github.com/ArtiomInc" target="_blank" class="btn"
        >github</a
      >
      <a
        href="https://www.linkedin.com/in/artiom-duc/"
        target="_blank"
        class="btn"
        >linkedin</a
      >
    </div>
  </section>
  <footer
    id="footer"
    class="w-full my-16 mt-28 flex flex-col gap-3 items-center"
  >
    <svg
      data-testid="wave-divider"
      style="max-width: unset; width: 180px"
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
    <div>Built by Artiom Duc</div>
    <div>©Copyright 2023 - Artiom Duc</div>
  </footer>
  <Menu v-if="menuDisplay" @close="closeMenu"></Menu>
</template>

<style scoped></style>

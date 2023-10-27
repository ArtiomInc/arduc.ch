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
    id="home"
    class="w-full h-screen relative flex md:justify-between gap-14 md:gap-0 justify-center items-center flex-col md:flex-row-reverse"
  >
    <div>
      <img
        class="w-[300px] h-full object-cover rounded-full"
        src="/src/assets/images/artiom_duc.jpg"
        alt=""
      />
    </div>
    <div>
      <p class="text-xl">Hey there ! I'm</p>
      <h1>Artiom Duc</h1>
      <p class="text-3xl">
        <strong>Industrial Software Technician.</strong> Explore here my
        portfolio and innovation lab.
      </p>
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
        <a href="#home" class="cursor-pointer flex gap-1 items-center">
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
      <h2>Skills</h2>
      <div class="flex flex-wrap justify-between">
        <div>
          <h3>Conception</h3>
          <ul>
            <li>SolidWorks</li>
            <li>Inventor Pro</li>
            <li>Qelectrotech</li>
            <li>Eplan</li>
          </ul>
        </div>
        <div>
          <h3>Programmation</h3>
          <ul>
            <li>TwinCAT</li>
            <li>TIA Portal</li>
            <li>Studio 5000</li>
            <li>GX Works</li>
          </ul>
        </div>
        <div>
          <h3>Frontend</h3>
          <ul>
            <li>typescript</li>
            <li>vue</li>
            <li>tailwindcss</li>
          </ul>
        </div>
        <div>
          <h3>Backend</h3>
          <ul>
            <li>python</li>
            <li>nodejs</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section id="projects" class="w-full my-20">
    <div>
      <h2>Projects</h2>
      <div class="flex flex-col sm:flex-row justify-between gap-2">
        <div class="w-full h-fit bg-[var(--interactive)] p-4 rounded-xl">
          <h3>Terminal web</h3>
          <div>
            This project is an online terminal application that provides a user
            interface for entering commands and receiving responses in return.
          </div>
          <a
            class="flex items-center gap-1 text-lg font-bold"
            href="https://term.arduc.ch"
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
        </div>
        <div class="w-full h-fit bg-[var(--interactive)] p-4 rounded-xl">
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
            href="https://github.com/ArtiomInc/arduc.ch"
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
        </div>
      </div>
    </div>
  </section>
  <section id="contact" class="w-full my-20">
    <div class="text-center">
      <h2>Contact</h2>
      <a href="" class="btn">github</a>
      <a href="" class="btn">linkedin</a>
    </div>
  </section>
  <footer id="footer" class="w-full my-16 flex flex-col gap-3 items-center">
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
    <div>Designed & Built by Artiom Duc</div>
    <div>©Copyright 2023 - Artiom Duc</div>
  </footer>
  <Menu v-if="menuDisplay" @close="closeMenu"></Menu>
</template>

<style scoped>
section {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 1s ease 0.5s forwards;
  scroll-timeline: fadein 0.5s;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@scroll-timeline fadein {
  start: 0;
  end: 100%;
}

@scroll-timeline fadein {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

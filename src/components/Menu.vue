<script setup lang="ts">
const emit = defineEmits(['close']);

function close() {
  var panel: HTMLElement | null = document.getElementById('panel');
  if (panel) {
    panel.id = 'panel-disparition';
  }
  setTimeout(() => {
    emit('close');
  }, 300);
}
</script>

<template>
  <div
    id="panel"
    class="fixed top-0 left-0 m-0 p-0 w-screen h-screen bg-[var(--interactive)] flex justify-center items-center"
  >
    <div>
      <ul class="flex flex-col items-center gap-[8vh] mb-[10vh] text-4xl">
        <div id="close" class="flex cursor-pointer" @click="close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            width="40"
            height="40"
            fill="#b1f1cb"
          >
            <path
              d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
            />
          </svg>
        </div>
        <a href="" @click="close" class="flex cursor-pointer relative">
          <p class="z-10">Home</p>
        </a>
        <a href="#skills" @click="close" class="flex cursor-pointer relative">
          <p class="z-10">Skills</p>
        </a>
        <a href="#projects" @click="close" class="flex cursor-pointer relative">
          <p class="z-10">Project</p>
        </a>
        <a href="#contact" @click="close" class="flex cursor-pointer relative">
          <p class="z-10">Contact</p>
        </a>
      </ul>
    </div>
  </div>
</template>

<style scoped>
#panel {
  animation: slidein 0.3s ease-in-out;
}

@keyframes slidein {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
}

#panel-disparition {
  animation: slideout 0.3s ease-in-out;
}

@keyframes slideout {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(100%);
  }
}

a::before {
  content: '';
  position: absolute;
  width: 0%;
  height: 4px;
  bottom: 0;
  left: 0;
  background-color: var(--border);
  transition: width 0.3s ease-out;
}

a:hover::before {
  width: 100%;
}

#close {
  border: 4px solid transparent;
  border-radius: 999px;
  transition: border 0.3s ease-out;
}

#close:hover {
  border: 4px solid var(--border);
}
</style>

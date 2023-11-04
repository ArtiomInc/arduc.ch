<template>
  <section
    class="relative w-full min-h-screen flex flex-col justify-between items-center"
  >
    <div class="w-full flex justify-end p-3">
      <div
        v-motion-slide-bottom
        class="cursor-pointer"
        @click="$emit('openMenu')"
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
    </div>
    <div class="flex flex-col gap-4 md:flex-row-reverse items-center">
      <img
        v-motion-slide-bottom
        class="w-[250px] md:w-[350px] h-full mx-auto object-cover rounded-full"
        src="/src/assets/images/artiom_duc.jpg"
        alt="Artiom Duc"
      />
      <div v-motion-slide-bottom>
        <p class="text-xl">Hey there ! I'm</p>
        <h1>Artiom Duc</h1>
        <p class="text-3xl">
          <strong>Industrial Software Technician.</strong> Explore here my
          portfolio and innovation lab.
        </p>
      </div>
    </div>
    <div class="w-full p-3">
      <div
        v-motion-slide-bottom
        class="animate-bounce rounded-full flex items-center justify-center"
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
    <div class="absolute -z-10 h-full flex justify-center items-center">
      <div class="animation-container w-[40vw] h-[40vh]">
        <div
          class="test-anim bg-white/10 w-full h-full blur-3xl rounded-full animate-randomX"
        ></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes randomX {
  0% {
    transform: translateX(0vw);
  }
  30% {
    transform: translateX(-20vw);
  }
  60% {
    transform: translateX(20vw);
  }
  100% {
    transform: translateX(0vw);
  }
}

@keyframes randomY {
  0% {
    transform: translateY(0vh);
  }
  20% {
    transform: translateY(-20vh);
  }
  80% {
    transform: translateY(20vh);
  }
  100% {
    transform: translateY(0vh);
  }
}

.animation-container {
  animation-name: randomY;
  animation-duration: 10s; /* Set the duration for randomY animation */
  animation-timing-function: ease-in-out; /* Adjust timing function if needed */
  animation-iteration-count: infinite; /* Make it repeat infinitely */
}

.test-anim {
  animation-name: randomX;
  animation-duration: 10s; /* Set the duration for randomX animation */
  animation-timing-function: linear; /* Adjust timing function if needed */
  animation-iteration-count: infinite; /* Make it repeat infinitely */
}
</style>

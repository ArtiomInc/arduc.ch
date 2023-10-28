<template>
  <section
    id=""
    class="w-full min-h-screen flex flex-col justify-between items-center"
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
  </section>
</template>

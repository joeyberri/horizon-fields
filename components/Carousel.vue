<template>
    <div class="carousel relative">
      <div class="carousel-inner overflow-x-hidden">
        <slot />
      </div>
      <button type="button" class="carousel-control-prev absolute top-0 left-0 z-10 p-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-gray-200 rounded-full" @click="prevSlide">
        <svg class="w-4 h-4" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 18l-6-6l6-6" />
        </svg>
      </button>
      <button type="button" class="carousel-control-next absolute top-0 right-0 z-10 p-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-gray-200 rounded-full" @click="nextSlide">
        <svg class="w-4 h-4" aria-hidden="true" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l6 6-6 6" />
        </svg>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Carousel',
    data() {
      return {
        currentIndex: 0,
      };
    },
    methods: {
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.$slots.default.length) % this.$slots.default.length;
      },
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.$slots.default.length;
      },
    },
  };
  </script>
  
  <style scoped>
  
  .carousel-inner {
    display: flex;
    width: 100%;
    transform: translateX(-calc(${this.currentIndex} * 100%));
    transition: transform 0.5s ease-in-out;
  }
  
  .carousel-item {
    width: 100%; /* Or flex: 1 0 100%; */
  }
  
  /* Add styles for carousel items and controls */
  </style>
  
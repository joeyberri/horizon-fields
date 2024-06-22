<template>
  <section
    :class="[
      'relative flex items-center justify-center w-full h-screen',
      backgroundImage ? 'bg-cover bg-center' : 'bg-white',
    ]"
    :style="backgroundImageStyle"
  >
    <div
      v-if="overlay"
      class="absolute inset-0 bg-black"
      :style="overlayStyle"
    ></div>
    <div class="relative center w-full h-full">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    backgroundImage: {
      type: String,
      default: null,
    },
    overlay: {
      type: Boolean,
      default: false,
    },
    overlayOpacity: {
      type: Number,
      default: 0.6,
    },
  },
  computed: {
    backgroundImageStyle() {
      if (this.backgroundImage) {
        return {
          backgroundImage: `url(${this.backgroundImage})`,
        };
      }
      return {};
    },
    overlayStyle() {
      return {
        backgroundColor: `rgba(0, 0, 0, ${this.overlayOpacity})`,
      };
    },
  },
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>

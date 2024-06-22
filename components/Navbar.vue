<template>
  <nav
    class="bg-black/[0.2] backdrop-blur-[15px] px-[8.75em] py-[1.25em] fixed w-full z-10"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between">
        <div class="flex">
          <div class="flex-shrink-0">
            <NuxtLink to="/" class="text-2xl font-bold text-gray-800"
              ><Logo
            /></NuxtLink>
          </div>
        </div>
        <div class="flex text-[1em] font-semibold items-center">
          <NuxtLink
            to="/about"
            :class="[
              'relative inline-flex items-center text-white hover:text-green/20 px-[10px] py-[.75em] rounded-[100px]',
              $route.path === '/about' ? '!text-green' : '',
            ]"
          >
            <span class="mr-2">About</span>
            <div
              v-if="$route.path === '/about'"
              class="-mx-[15px] absolute bottom-0 w-full rounded-t-[500px] bg-green h-[10px]"
            ></div>
          </NuxtLink>
          <NuxtLink
            to="/join"
            class="ml-4 text-green border-green border px-[1.5em] py-[.75em] rounded-[100px]"
            >Sign Up</NuxtLink
          >
        </div>
      </div>
    </div>
  </nav>
</template>

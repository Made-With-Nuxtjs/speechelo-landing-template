<template>

  <nav class="bg-white border-b border-gray-200 md:lg:xl:sticky top-0 z-10">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-32 xl:px-32">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->

        <a href="/">
          <NuxtImg src="https://placehold.co/128x32" title="company-logo" alt="logo-image" class="w-[160px] h-[48px]" />
        </a>


        <!-- Desktop Navigation -->
        <div class="hidden md:flex lg:md:flex xl:md:flex justify-center font-custom items-center space-x-12">
          <a href="#" class="text-sm font-semibold text-gray-700 hover:text-orange-600">Login</a>
          <a href="#" class="text-sm font-semibold text-gray-700 hover:text-orange-600">Text to voice</a>
          <a href="#" class="text-sm font-semibold text-gray-700 hover:text-orange-600">Voice over generator</a>
          <a href="#" class="text-sm font-bold text-orange-600">Voice Samples</a>
          <a href="#" class="text-sm font-semibold text-gray-700 hover:text-orange-600">Blog</a>
          <a href="#" class="text-sm font-semibold text-gray-700 hover:text-orange-600">Support</a>
          <a href="#"
            class="bg-[#6fad6a] Box Shadow Outset text-sm font-semibold text-white px-4 py-1 rounded-md hover:bg-[#6fad6a]">
            Order Now
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:lg:xl:hidden">
          <!-- Menu Icon -->
          <svg @click="toggleMenu" v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m4 6H4" />
          </svg>
          <!-- Close Icon -->
          <svg @click="toggleMenu" v-else class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>

        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="menuOpen" class="md:lg:xl:hidden absolute top-20 bg-white w-full">
      <div class="px-4 pt-2 pb-3 space-y-2  font-custom">
        <a href="#"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Login</a>
        <a href="#"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Text
          to voice</a>
        <a href="#"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Voice
          over generator</a>
        <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-orange-500">Voice Samples</a>
        <a href="#"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Blog</a>
        <a href="#"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Support</a>
        <a href="#"
          class="block px-4 py-2 text-center rounded-md text-base font-medium bg-[#6fad6a] text-white hover:bg-green-600">
          Order Now
        </a>
      </div>
    </div>
  </nav>

</template>


<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);
const menuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
  menuOpen.value = !menuOpen.value;
}
</script>
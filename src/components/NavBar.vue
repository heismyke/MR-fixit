<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex items-center">
          <h1 class="text-2xl font-semibold text-gray-900">Mr-Fixit</h1>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#services" class="text-sm font-light text-gray-700 hover:text-gray-900 transition-colors">
            Services
          </a>
          <a href="#how-it-works" class="text-sm font-light text-gray-700 hover:text-gray-900 transition-colors">
            How It Works
          </a>
          <a href="#features" class="text-sm font-light text-gray-700 hover:text-gray-900 transition-colors">
            Features
          </a>
          <a href="#coverage" class="text-sm font-light text-gray-700 hover:text-gray-900 transition-colors">
            Coverage
          </a>
          <button class="bg-black text-white px-6 py-2 rounded-sm text-sm font-medium hover:bg-gray-800 transition-colors">
            Get Early Access
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2">
          <Bars3Icon v-if="!mobileMenuOpen" class="w-6 h-6 text-gray-900" />
          <XMarkIcon v-else class="w-6 h-6 text-gray-900" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-full opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-full opacity-0"
    >
      <div v-if="mobileMenuOpen" class="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200">
        <div class="px-4 py-6 space-y-4">
          <a href="#services" @click="mobileMenuOpen = false" class="block text-base font-light text-gray-700 hover:text-gray-900">
            Services
          </a>
          <a href="#how-it-works" @click="mobileMenuOpen = false" class="block text-base font-light text-gray-700 hover:text-gray-900">
            How It Works
          </a>
          <a href="#features" @click="mobileMenuOpen = false" class="block text-base font-light text-gray-700 hover:text-gray-900">
            Features
          </a>
          <a href="#coverage" @click="mobileMenuOpen = false" class="block text-base font-light text-gray-700 hover:text-gray-900">
            Coverage
          </a>
          <button class="w-full bg-black text-white px-6 py-3 rounded-sm text-sm font-medium hover:bg-gray-800 transition-colors">
            Get Early Access
          </button>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

const scrolled = ref(false);
const mobileMenuOpen = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

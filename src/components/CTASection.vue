<template>
  <section class="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
    <!-- Animated background elements -->
    <div class="absolute top-0 left-0 w-full h-full">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-float"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-float" style="animation-delay: 2s;"></div>
    </div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <div class="mb-8">
        <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-light mb-8">
          <SparklesIcon class="w-4 h-4" />
          <span>Launching Soon in Abuja</span>
        </div>
      </div>

      <h2 class="text-4xl md:text-6xl font-light tracking-tight mb-6">
        Be Among The First<br />
        <span class="font-medium">To Experience Mr-Fixit</span>
      </h2>

      <p class="text-xl text-gray-300 font-light mb-12 max-w-2xl mx-auto">
        Join our waitlist and get exclusive early access when we launch.
        Plus, enjoy special discounts for early adopters.
      </p>

      <!-- Email Signup Form with Glassmorphism -->
      <div class="max-w-xl mx-auto">
        <div class="bg-white/10 backdrop-blur-lg border border-white/20 p-2 rounded-lg shadow-2xl">
          <form @submit.prevent="handleSubmit" class="flex flex-col sm:flex-row gap-2">
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email address"
              required
              class="flex-1 px-6 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-white/30 transition-colors rounded-md font-light"
            />
            <button
              type="submit"
              class="bg-white text-black px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Get Early Access
            </button>
          </form>
        </div>

        <p class="text-sm text-gray-400 font-light mt-4">
          No spam, ever. Unsubscribe anytime.
        </p>
      </div>

      <!-- Benefits -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div class="flex flex-col items-center">
          <div class="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center mb-4">
            <BoltIcon class="w-6 h-6 text-white" />
          </div>
          <h3 class="font-medium mb-2">Early Access</h3>
          <p class="text-sm text-gray-400 font-light">
            Be the first to use the app
          </p>
        </div>

        <div class="flex flex-col items-center">
          <div class="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center mb-4">
            <GiftIcon class="w-6 h-6 text-white" />
          </div>
          <h3 class="font-medium mb-2">Special Discounts</h3>
          <p class="text-sm text-gray-400 font-light">
            Exclusive offers for early users
          </p>
        </div>

        <div class="flex flex-col items-center">
          <div class="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center mb-4">
            <BellAlertIcon class="w-6 h-6 text-white" />
          </div>
          <h3 class="font-medium mb-2">Launch Updates</h3>
          <p class="text-sm text-gray-400 font-light">
            Stay informed about our progress
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { SparklesIcon, BoltIcon, GiftIcon, BellAlertIcon } from '@heroicons/vue/24/outline';

const email = ref('');

const handleSubmit = () => {
  if (email.value) {
    alert(`Thank you! We'll notify you at ${email.value} when we launch.`);
    email.value = '';
  }
};
</script>

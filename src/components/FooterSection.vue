<template>
  <footer class="bg-black text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <!-- Brand -->
        <div>
          <h3 class="text-2xl font-medium mb-4">Mr-Fixit</h3>
          <p class="text-gray-400 font-light leading-relaxed">
            Bringing automotive services to your fingertips in Abuja.
          </p>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-sm font-medium mb-4 uppercase tracking-wider">Contact</h4>
          <div class="space-y-3">
            <div class="flex items-center gap-3">
              <EnvelopeIcon class="w-5 h-5 text-gray-400" />
              <a href="mailto:hello@mrfixit.ng" class="text-gray-400 hover:text-white transition-colors font-light">
                hello@mrfixit.ng
              </a>
            </div>
            <div class="flex items-center gap-3">
              <PhoneIcon class="w-5 h-5 text-gray-400" />
              <a href="tel:+234" class="text-gray-400 hover:text-white transition-colors font-light">
                +234 (0) 000 0000
              </a>
            </div>
          </div>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="text-sm font-medium mb-4 uppercase tracking-wider">Stay Updated</h4>
          <p class="text-gray-400 font-light mb-4">
            Get notified when we launch
          </p>
          <div class="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              class="flex-1 px-4 py-2 bg-gray-900 border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors text-sm font-light"
            />
            <button class="bg-white text-black px-6 py-2 hover:bg-gray-200 transition-colors text-sm font-medium">
              Notify Me
            </button>
          </div>
        </div>
      </div>

      <div class="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-400 text-sm font-light">
          © {{ currentYear }} Mr-Fixit. All rights reserved.
        </p>
        <div class="flex gap-6">
          <a href="#" class="text-gray-400 hover:text-white transition-colors text-sm font-light">
            Privacy Policy
          </a>
          <a href="#" class="text-gray-400 hover:text-white transition-colors text-sm font-light">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline';

const currentYear = computed(() => new Date().getFullYear());
</script>

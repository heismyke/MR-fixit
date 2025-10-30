<template>
  <section class="py-32 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-24">
        <h2 class="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-4">
          Problems We're Solving
        </h2>
        <p class="text-lg text-gray-500 font-light max-w-2xl mx-auto">
          Real challenges car owners face in Abuja every day
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        <div
          v-for="problem in problems"
          :key="problem.id"
          class="group"
        >
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 border border-red-200 bg-red-50 rounded-full flex items-center justify-center group-hover:border-red-300 transition-colors">
                <component
                  :is="getIcon(problem.icon)"
                  class="w-6 h-6 text-red-600"
                />
              </div>
            </div>
            <div class="flex-1 pt-1">
              <h3 class="text-base font-medium text-gray-900 mb-2">
                {{ problem.title }}
              </h3>
              <p class="text-sm text-gray-500 font-light leading-relaxed">
                {{ problem.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Solution Banner -->
      <div class="mt-20 max-w-4xl mx-auto text-center">
        <div class="bg-white border border-gray-200 p-8 rounded-lg">
          <h3 class="text-2xl font-medium text-gray-900 mb-3">
            Mr-Fixit Solves All of This
          </h3>
          <p class="text-gray-600 font-light leading-relaxed mb-6">
            One app to eliminate every automotive service headache. Verified technicians,
            transparent pricing, real-time tracking, and help in minutes.
          </p>
          <button class="bg-black text-white px-8 py-3 rounded-sm text-sm font-medium hover:bg-gray-800 transition-colors">
            Get Early Access
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { problems } from '../data';
import {
  MagnifyingGlassIcon,
  ClockIcon,
  CurrencyDollarIcon,
  PhoneXMarkIcon,
  ExclamationTriangleIcon,
  EyeSlashIcon,
} from '@heroicons/vue/24/outline';

const iconMap: Record<string, any> = {
  MagnifyingGlassIcon,
  ClockIcon,
  CurrencyDollarIcon,
  PhoneXMarkIcon,
  ExclamationTriangleIcon,
  EyeSlashIcon,
};

const getIcon = (iconName: string) => {
  return iconMap[iconName] || MagnifyingGlassIcon;
};
</script>

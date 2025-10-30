<template>
    <section id="how-it-works" class="py-32 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-24">
                <h2
                    class="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-4"
                >
                    How It Works
                </h2>
                <p class="text-lg text-gray-500 font-light max-w-2xl mx-auto">
                    Help arrives in minutes with our geofencing technology
                </p>
            </div>

            <div class="max-w-4xl mx-auto">
                <div class="space-y-12">
                    <div
                        v-for="step in howItWorksSteps"
                        :key="step.id"
                        class="flex gap-8 items-start group"
                    >
                        <!-- Step Number -->
                        <div class="flex-shrink-0">
                            <div
                                class="w-12 h-12 border border-gray-900 rounded-full flex items-center justify-center"
                            >
                                <span
                                    class="text-lg font-light text-gray-900"
                                    >{{ step.step }}</span
                                >
                            </div>
                        </div>

                        <!-- Content -->
                        <div class="flex-1 pt-2">
                            <h3 class="text-xl font-medium text-gray-900 mb-2">
                                {{ step.title }}
                            </h3>
                            <p class="text-gray-500 font-light leading-relaxed">
                                {{ step.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-20 text-center">
                <div
                    class="inline-flex items-center gap-3 text-sm font-light text-gray-600"
                >
                    <MapPinIcon class="w-5 h-5 text-gray-900" />
                    <span>Powered by advanced geofencing technology</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { howItWorksSteps } from "../data";
import { MapPinIcon } from "@heroicons/vue/24/outline";
</script>

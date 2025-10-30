<template>
    <section
        class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden"
    >
        <!-- Animated background elements -->
        <div
            class="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-30 animate-float"
        ></div>
        <div
            class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-30 animate-float"
            style="animation-delay: 2s"
        ></div>

        <div
            class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative z-10"
        >
            <!-- Badge -->
            <div
                class="inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-sm font-light mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
                <SparklesIcon class="w-4 h-4 text-gray-900" />
                <span class="text-gray-700">Coming Soon to Abuja</span>
            </div>

            <h1
                class="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-gray-900 mb-6"
            >
                Your Car's Dashboard,<br />
                <span
                    class="font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                >
                    Now On Your Phone
                </span>
            </h1>

            <p
                class="text-xl md:text-2xl font-light text-gray-600 mb-12 max-w-3xl mx-auto"
            >
                On-demand automotive services in Abuja. From mechanics to fuel
                delivery, help is just a tap away.
            </p>

            <div
                class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
                <button
                    class="bg-black text-white px-8 py-4 rounded-sm text-sm font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                    Join Waitlist
                </button>
                <a
                    href="#how-it-works"
                    class="group border border-gray-300 text-gray-900 px-8 py-4 rounded-sm text-sm font-medium hover:bg-gray-50 transition-all duration-300 hover:shadow-lg flex items-center gap-2"
                >
                    <span>Learn More</span>
                    <ChevronDownIcon
                        class="w-4 h-4 group-hover:translate-y-1 transition-transform"
                    />
                </a>
            </div>

            <!-- Glassmorphism cards showcase -->

            <div class="mt-20">
                <a href="#services">
                    <ChevronDownIcon
                        class="w-8 h-8 text-gray-400 mx-auto animate-bounce cursor-pointer hover:text-gray-600 transition-colors"
                    />
                </a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ChevronDownIcon, SparklesIcon } from "@heroicons/vue/24/outline";
</script>

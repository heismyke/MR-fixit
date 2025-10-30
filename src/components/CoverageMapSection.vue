<template>
    <section id="coverage" class="py-24 bg-white relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2
                    class="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-4"
                >
                    Coverage Across Abuja
                </h2>
                <p class="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                    We're expanding our service network across all major areas
                    in Abuja
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Map Container with Glassmorphism -->
                <div class="relative group">
                    <div
                        class="absolute inset-0 bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"
                    ></div>
                    <div
                        class="relative bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-2xl overflow-hidden"
                    >
                        <!-- Google Maps Embed -->
                        <div class="aspect-video rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252230.58952824205!2d7.260476844043707!3d9.057394818428858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7da48d0d%3A0x99a8fe4168c50bc8!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng"
                                width="100%"
                                height="100%"
                                style="border: 0"
                                allowfullscreen
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                class="grayscale hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <!-- Coverage Areas List -->
                <div class="space-y-6">
                    <div
                        v-for="area in coverageAreas"
                        :key="area.id"
                        class="group bg-white/40 backdrop-blur-sm border border-white/20 p-6 rounded-lg hover:bg-white/60 transition-all duration-300 hover:shadow-lg"
                    >
                        <div class="flex items-start gap-4">
                            <div class="flex-shrink-0">
                                <div
                                    class="w-12 h-12 bg-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                                >
                                    <MapPinIcon class="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <div class="flex-1">
                                <h3
                                    class="text-lg font-medium text-gray-900 mb-2"
                                >
                                    {{ area.name }}
                                </h3>
                                <p
                                    class="text-gray-600 font-light text-sm mb-3"
                                >
                                    {{ area.description }}
                                </p>
                                <div class="flex items-center gap-2 text-sm">
                                    <div
                                        class="flex items-center gap-1 text-green-600"
                                    >
                                        <div
                                            class="w-2 h-2 bg-green-600 rounded-full animate-pulse"
                                        ></div>
                                        <span class="font-light"
                                            >{{ area.technicians }} Technicians
                                            Available</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Coming Soon Badge -->
                    <div
                        class="border border-gray-200 p-6 rounded-lg bg-gray-50"
                    >
                        <div class="flex items-center gap-3">
                            <SparklesIcon class="w-5 h-5 text-gray-900" />
                            <div>
                                <div class="font-medium text-gray-900 mb-1">
                                    Expanding Soon
                                </div>
                                <div class="text-sm font-light text-gray-600">
                                    We're bringing Mr-Fixit to more areas across
                                    FCT
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { MapPinIcon, SparklesIcon } from "@heroicons/vue/24/outline";

const coverageAreas = [
    {
        id: "wuse",
        name: "Wuse & Maitama",
        description: "Central business districts with 24/7 coverage",
        technicians: 45,
    },
    {
        id: "garki",
        name: "Garki & Asokoro",
        description: "Residential and commercial areas",
        technicians: 38,
    },
    {
        id: "gwarinpa",
        name: "Gwarinpa & Kubwa",
        description: "High-density residential zones",
        technicians: 52,
    },
    {
        id: "airport",
        name: "Airport Road & Lugbe",
        description: "Major highways and transit routes",
        technicians: 41,
    },
];
</script>

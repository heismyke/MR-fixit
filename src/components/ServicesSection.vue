<template>
    <section id="services" class="py-32 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-24">
                <h2
                    class="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-4"
                >
                    Everything Your Car Needs
                </h2>
                <p class="text-lg text-gray-500 font-light max-w-2xl mx-auto">
                    Professional automotive services delivered to your location
                </p>
            </div>

            <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 max-w-6xl mx-auto"
            >
                <div
                    v-for="service in services"
                    :key="service.id"
                    class="text-center group"
                >
                    <component
                        :is="getIcon(service.icon)"
                        class="w-10 h-10 text-gray-900 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    />
                    <h3 class="text-base font-medium text-gray-900 mb-2">
                        {{ service.title }}
                    </h3>
                    <p class="text-sm text-gray-500 font-light leading-relaxed">
                        {{ service.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { services } from "../data";
import {
    WrenchScrewdriverIcon,
    BoltIcon,
    ArrowPathIcon,
    FireIcon,
    TruckIcon,
} from "@heroicons/vue/24/outline";

const iconMap: Record<string, any> = {
    WrenchScrewdriverIcon,
    BoltIcon,
    ArrowPathIcon,
    FireIcon,
    TruckIcon,
};

const getIcon = (iconName: string) => {
    return iconMap[iconName] || WrenchScrewdriverIcon;
};
</script>

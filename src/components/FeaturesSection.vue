<template>
    <section id="features" class="py-32 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-24">
                <h2
                    class="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-4"
                >
                    Features
                </h2>
                <p class="text-lg text-gray-500 font-light max-w-2xl mx-auto">
                    Everything you need in one app
                </p>
            </div>

            <div
                class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 max-w-5xl mx-auto"
            >
                <div
                    v-for="feature in features"
                    :key="feature.id"
                    class="text-center group"
                >
                    <component
                        :is="getIcon(feature.icon)"
                        class="w-10 h-10 text-gray-900 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    />
                    <h3 class="text-base font-medium text-gray-900 mb-2">
                        {{ feature.title }}
                    </h3>
                    <p class="text-sm text-gray-500 font-light leading-relaxed">
                        {{ feature.description }}
                    </p>
                </div>
            </div>

            <!-- Stats Section -->
            <div class="mt-32 pt-16 border-t border-gray-100">
                <div
                    class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                >
                    <div
                        v-for="stat in stats"
                        :key="stat.id"
                        class="text-center"
                    >
                        <div
                            class="text-4xl md:text-5xl font-light text-gray-900 mb-2"
                        >
                            {{ stat.value }}
                        </div>
                        <div
                            class="text-xs text-gray-500 font-light uppercase tracking-wider"
                        >
                            {{ stat.label }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { features, stats } from "../data";
import {
    MapPinIcon,
    SignalIcon,
    CreditCardIcon,
    ShieldCheckIcon,
    ChatBubbleLeftRightIcon,
    StarIcon,
    CpuChipIcon,
    ChartBarIcon,
    BanknotesIcon,
} from "@heroicons/vue/24/outline";

const iconMap: Record<string, any> = {
    MapPinIcon,
    SignalIcon,
    CreditCardIcon,
    ShieldCheckIcon,
    ChatBubbleLeftRightIcon,
    StarIcon,
    CpuChipIcon,
    ChartBarIcon,
    BanknotesIcon,
};

const getIcon = (iconName: string) => {
    return iconMap[iconName] || MapPinIcon;
};
</script>

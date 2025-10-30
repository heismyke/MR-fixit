<template>
    <section class="py-32 bg-black text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-24">
                <h2 class="text-4xl md:text-5xl font-light tracking-tight mb-4">
                    What Our Customers Say
                </h2>
                <p class="text-lg text-gray-400 font-light max-w-2xl mx-auto">
                    Real experiences from real people in Abuja
                </p>
            </div>

            <!-- Swiper Carousel -->
            <swiper
                :modules="modules"
                :slides-per-view="1"
                :space-between="30"
                :loop="true"
                :autoplay="{
                    delay: 5000,
                    disableOnInteraction: false,
                }"
                :pagination="{
                    clickable: true,
                }"
                :breakpoints="{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }"
                class="testimonials-swiper pb-16"
            >
                <swiper-slide
                    v-for="testimonial in testimonials"
                    :key="testimonial.id"
                >
                    <div class="h-full p-8">
                        <!-- Rating Stars -->
                        <div class="flex gap-1 mb-6">
                            <StarIcon
                                v-for="star in 5"
                                :key="star"
                                class="w-4 h-4"
                                :class="
                                    star <= testimonial.rating
                                        ? 'text-white fill-white'
                                        : 'text-gray-700'
                                "
                            />
                        </div>

                        <!-- Content -->
                        <p
                            class="text-gray-300 font-light leading-relaxed mb-8 text-base"
                        >
                            "{{ testimonial.content }}"
                        </p>

                        <!-- Author -->
                        <div>
                            <div class="font-medium text-white text-sm">
                                {{ testimonial.name }}
                            </div>
                            <div class="text-xs text-gray-500 font-light">
                                {{ testimonial.role }}
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import { StarIcon } from "@heroicons/vue/24/outline";
import { testimonials } from "../data";

import "swiper/swiper-bundle.css";

const modules = [Autoplay, Pagination];
</script>

<style>
.testimonials-swiper .swiper-pagination-bullet {
    background: white;
    opacity: 0.3;
}

.testimonials-swiper .swiper-pagination-bullet-active {
    opacity: 1;
}
</style>

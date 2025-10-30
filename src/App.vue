<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import HeroSection from "./components/HeroSection.vue";
import ServicesSection from "./components/ServicesSection.vue";
import HowItWorksSection from "./components/HowItWorksSection.vue";
import FeaturesSection from "./components/FeaturesSection.vue";
import TestimonialsSection from "./components/TestimonialsSection.vue";
import CoverageMapSection from "./components/CoverageMapSection.vue";
import CTASection from "./components/CTASection.vue";
import FooterSection from "./components/FooterSection.vue";
</script>

<template>
    <div class="min-h-screen bg-white">
        <NavBar />
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CoverageMapSection />
        <CTASection />
        <FooterSection />
    </div>
</template>

<style>
html {
    scroll-behavior: smooth;
}
</style>

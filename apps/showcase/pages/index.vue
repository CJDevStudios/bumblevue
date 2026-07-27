<script setup lang="ts">
    import FeaturesSection from '@/components/landing/FeaturesSection.vue';
    import FooterSection from '@/components/landing/FooterSection.vue';
    import HeroSection from '@/components/landing/HeroSection.vue';
    import { inject, computed } from 'vue';
    import type { AppState } from '@/index';

    withDefaults(
        defineProps<{
            theme?: string | null;
        }>(),
        {
            theme: null
        }
    );

    const appState = inject<AppState>('appState');

    definePageMeta({
        layout: 'custom'
    });

    const containerClass = computed(() => {
        return ['landing', { 'layout-news-active': appState?.newsActive }];
    });
</script>

<template>
    <div :class="containerClass">
        <!--        <AppNews />-->
        <AppTopBar :showMenuButton="false" />
        <div class="landing-bg-image"></div>
        <div class="z-10 relative">
            <HeroSection />
            <FeaturesSection />
            <FooterSection />
            <Toast />
        </div>
    </div>
</template>

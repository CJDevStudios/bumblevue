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

<script>
import FeaturesSection from '@/components/landing/FeaturesSection.vue';
import FooterSection from '@/components/landing/FooterSection.vue';
import HeroSection from '@/components/landing/HeroSection.vue';

export default {
    setup() {
        definePageMeta({
            layout: 'custom'
        });
    },
    props: {
        theme: {
            type: String,
            default: null
        }
    },
    created() {
        this.$appState.designer.active = false;
    },
    mounted() {
        let afId = this.$route.query['af_id'];

        if (afId) {
            let today = new Date();
            let expire = new Date();

            expire.setTime(today.getTime() + 3600000 * 24 * 7);
            document.cookie = 'primeaffiliateid=' + afId + ';expires=' + expire.toUTCString() + ';path=/; domain:primefaces.org';
        }
    },
    computed: {
        containerClass() {
            return ['landing', { 'layout-news-active': this.$appState?.newsActive }];
        }
    },
    components: {
        HeroSection,
        FeaturesSection,
        FooterSection
    }
};
</script>

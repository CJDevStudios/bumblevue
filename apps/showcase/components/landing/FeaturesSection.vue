<script setup lang="ts">
const features = [
    {
        icon: 'objects-column',
        color: 'text-purple-500',
        title: '80+ UI Components',
        description: '80+ free, ready to use UI components for your web applications.'
    },
    {
        icon: 'palette',
        color: 'text-red-500',
        title: 'Styled or Unstyled',
        description: 'Choose from a variety of pre-built themes or implement your design systems with the CSS library of your choice like TailwindCSS.'
    },
    {
        icon: 'users',
        color: 'text-cyan-500',
        title: 'Accessibility',
        description: 'Compliant with the Web Content Accessibility Guidelines (WCAG 2.2, Level AA).'
    },
    {
        icon: 'mobile',
        color: 'text-sky-500',
        title: 'Mobile',
        description: 'Responsive components that work seamlessly on mobile devices and tablets.'
    },
    {
        icon: 'check-circle',
        color: 'text-blue-800',
        title: 'Typescript',
        description: 'Typescript support for all components and directives.'
    }
];
</script>
<template>
    <section class="landing-features py-20">
        <div class="section-header">Features</div>
        <p class="section-detail">BumbleVue is the most complete free and open-source solution for your UI requirements.</p>
        <div class="mt-16 px-8 lg:px-20">
            <div class="features-container">
                <div class="grid grid-cols-12 gap-4">
                    <div v-for="(feature, index) in features" :key="index" class="col-span-12 md:col-span-6 xl:col-span-3 flex justify-center">
                        <div v-animateonscroll.once="{ enterClass: 'animate-fadein' }" class="box p-6 w-full animate-duration-500">
                            <i :class="['pi', `pi-${feature.icon}`, 'text-xl mb-4 me-2', feature.color]"></i>
                            <span class="font-semibold mb-4 text-lg">{{ feature.title }}</span>
                            <p class="m-0 text-surface-500 dark:text-surface-400 font-medium">{{ feature.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

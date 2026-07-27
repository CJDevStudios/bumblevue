<script setup lang="ts">
    import AccessibilityDoc from '@/doc/ripple/AccessibilityDoc.vue';
    import ConfigurationDoc from '@/doc/ripple/ConfigurationDoc.vue';
    import CustomDoc from '@/doc/ripple/CustomDoc.vue';
    import DefaultDoc from '@/doc/ripple/DefaultDoc.vue';
    import ImportDoc from '@/doc/ripple/ImportDoc.vue';
    import PTComponent from '@/doc/ripple/pt/index.vue';
    import ThemingDoc from '@/doc/ripple/theming/index.vue';

    const docs = [
        { id: 'import', label: 'Import', component: ImportDoc },
        { id: 'configuration', label: 'Configuration', component: ConfigurationDoc },
        { id: 'default', label: 'Default', component: DefaultDoc },
        { id: 'custom', label: 'Custom', component: CustomDoc },
        { id: 'accessibility', label: 'Accessibility', component: AccessibilityDoc }
    ];
</script>

<template>
    <DocComponent title="Vue Ripple Component" header="Ripple" description="Ripple directive adds ripple effect to the host element." :componentDocs="docs" :apiDocs="['Ripple']" :ptTabComponent="PTComponent" :themingDocs="ThemingDoc" />
</template>

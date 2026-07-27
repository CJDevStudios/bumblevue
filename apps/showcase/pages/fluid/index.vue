<script setup lang="ts">
    import AccessibilityDoc from '@/doc/fluid/AccessibilityDoc.vue';
    import BasicDoc from '@/doc/fluid/BasicDoc.vue';
    import ImportDoc from '@/doc/fluid/ImportDoc.vue';
    import PTComponent from '@/doc/fluid/pt/index.vue';
    import ThemingDoc from '@/doc/fluid/theming/index.vue';

    const docs = [
        { id: 'import', label: 'Import', component: ImportDoc },
        { id: 'basic', label: 'Basic', component: BasicDoc },
        { id: 'accessibility', label: 'Accessibility', component: AccessibilityDoc }
    ];
</script>

<template>
    <DocComponent
        title="Vue Fluid Component"
        header="Fluid"
        description="Fluid is a layout component to make descendant components span full width of their container."
        :componentDocs="docs"
        :ptTabComponent="PTComponent"
        :apiDocs="['Fluid']"
        :themingDocs="ThemingDoc"
    />
</template>

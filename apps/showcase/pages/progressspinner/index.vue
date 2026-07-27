<script setup lang="ts">
    import AccessibilityDoc from '@/doc/progressspinner/AccessibilityDoc.vue';
    import BasicDoc from '@/doc/progressspinner/BasicDoc.vue';
    import CustomDoc from '@/doc/progressspinner/CustomDoc.vue';
    import ImportDoc from '@/doc/progressspinner/ImportDoc.vue';
    import PTComponent from '@/doc/progressspinner/pt/index.vue';
    import ThemingDoc from '@/doc/progressspinner/theming/index.vue';

    const docs = [
        { id: 'import', label: 'Import', component: ImportDoc },
        { id: 'basic', label: 'Basic', component: BasicDoc },
        { id: 'custom', label: 'Custom', component: CustomDoc },
        { id: 'accessibility', label: 'Accessibility', component: AccessibilityDoc }
    ];
</script>

<template>
    <DocComponent
        title="Vue ProgressSpinner Component"
        header="ProgressSpinner"
        description="ProgressSpinner is a process status indicator."
        :componentDocs="docs"
        :apiDocs="['ProgressSpinner']"
        :ptTabComponent="PTComponent"
        :themingDocs="ThemingDoc"
    />
</template>

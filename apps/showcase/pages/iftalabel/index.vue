<script setup lang="ts">
    import AccessibilityDoc from '@/doc/iftalabel/AccessibilityDoc.vue';
    import BasicDoc from '@/doc/iftalabel/BasicDoc.vue';
    import ImportDoc from '@/doc/iftalabel/ImportDoc.vue';
    import InvalidDoc from '@/doc/iftalabel/InvalidDoc.vue';
    import PTComponent from '@/doc/iftalabel/pt/index.vue';
    import ThemingDoc from '@/doc/iftalabel/theming/index.vue';

    const docs = [
        { id: 'import', label: 'Import', component: ImportDoc },
        { id: 'basic', label: 'Basic', component: BasicDoc },
        { id: 'invalid', label: 'Invalid', component: InvalidDoc },
        { id: 'accessibility', label: 'Accessibility', component: AccessibilityDoc }
    ];
</script>

<template>
    <DocComponent title="Vue Ifta Label" header="IftaLabel" description="IftaLabel is used to create infield top aligned labels" :componentDocs="docs" :ptTabComponent="PTComponent" :apiDocs="['IftaLabel']" :themingDocs="ThemingDoc" />
</template>

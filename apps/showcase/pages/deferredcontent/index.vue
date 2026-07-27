<script setup lang="ts">
    import AccessibilityDoc from '@/doc/deferredcontent/AccessibilityDoc.vue';
    import BasicDoc from '@/doc/deferredcontent/BasicDoc.vue';
    import DataTableDoc from '@/doc/deferredcontent/DataTableDoc.vue';
    import ImportDoc from '@/doc/deferredcontent/ImportDoc.vue';
    import PTComponent from '@/doc/deferredcontent/pt/index.vue';
    import ThemingDoc from '@/doc/deferredcontent/theming/index.vue';

    const docs = [
        { id: 'import', label: 'Import', component: ImportDoc },
        { id: 'basic', label: 'Basic', component: BasicDoc },
        { id: 'datatable', label: 'DataTable', component: DataTableDoc },
        { id: 'accessibility', label: 'Accessibility', component: AccessibilityDoc }
    ];
</script>

<template>
    <DocComponent
        title="Vue Deferred Content Component"
        header="DeferredContent"
        description="DeferredContent postpones the loading the content that is initially not in the viewport until it becomes visible on scroll."
        :componentDocs="docs"
        :apiDocs="['DeferredContent']"
        :ptTabComponent="PTComponent"
        :themingDocs="ThemingDoc"
    />
</template>

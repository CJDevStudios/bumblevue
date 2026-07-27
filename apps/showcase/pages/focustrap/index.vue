<script setup lang="ts">
    import BasicDoc from '@/doc/focustrap/BasicDoc.vue';
    import ImportDoc from '@/doc/focustrap/ImportDoc.vue';

    const docs = [
        { id: 'import', label: 'Import', component: ImportDoc },
        { id: 'basic', label: 'Basic', component: BasicDoc }
    ];
</script>

<template>
    <DocComponent title="Vue FocusTrap Directive" header="Focus Trap" description="Focus Trap keeps focus within a certain DOM element while tabbing." :componentDocs="docs" :apiDocs="['FocusTrap']" />
</template>

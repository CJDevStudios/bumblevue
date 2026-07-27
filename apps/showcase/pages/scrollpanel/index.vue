<script setup lang="ts">
    import AccessibilityDoc from '@/doc/scrollpanel/AccessibilityDoc.vue';
    import BasicDoc from '@/doc/scrollpanel/BasicDoc.vue';
    import CustomDoc from '@/doc/scrollpanel/CustomDoc.vue';
    import ImportDoc from '@/doc/scrollpanel/ImportDoc.vue';
    import PTComponent from '@/doc/scrollpanel/pt/index.vue';
    import ThemingDoc from '@/doc/scrollpanel/theming/index.vue';

    const docs = [
        { id: 'import', label: 'Import', component: ImportDoc },
        { id: 'basic', label: 'Basic', component: BasicDoc },
        { id: 'custom', label: 'Custom', component: CustomDoc },
        { id: 'accessibility', label: 'Accessibility', component: AccessibilityDoc }
    ];
</script>

<template>
    <DocComponent
        title="Vue ScrollPanel Component"
        header="ScrollPanel"
        description="ScrollPanel is a cross browser, lightweight and skinnable alternative to native browser scrollbar."
        :componentDocs="docs"
        :apiDocs="['ScrollPanel']"
        :ptTabComponent="PTComponent"
        :themingDocs="ThemingDoc"
    />
</template>

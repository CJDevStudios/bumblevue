<script setup lang="ts">
    import AccessibilityDoc from '@/doc/organizationchart/AccessibilityDoc.vue';
    import BasicDoc from '@/doc/organizationchart/BasicDoc.vue';
    import ColoredDoc from '@/doc/organizationchart/ColoredDoc.vue';
    import ImportDoc from '@/doc/organizationchart/ImportDoc.vue';
    import SelectionDoc from '@/doc/organizationchart/SelectionDoc.vue';
    import TemplateDoc from '@/doc/organizationchart/TemplateDoc.vue';
    import PTComponent from '@/doc/organizationchart/pt/index.vue';
    import ThemingDoc from '@/doc/organizationchart/theming/index.vue';

    const docs = [
        { id: 'import', label: 'Import', component: ImportDoc },
        { id: 'basic', label: 'Basic', component: BasicDoc },
        { id: 'selection', label: 'Selection', component: SelectionDoc },
        { id: 'template', label: 'Template', component: TemplateDoc },
        { id: 'colored', label: 'Colored', component: ColoredDoc },
        { id: 'accessibility', label: 'Accessibility', component: AccessibilityDoc }
    ];
</script>

<template>
    <DocComponent
        title="Vue Organization Chart Component"
        header="OrganizationChart"
        description="OrganizationChart visualizes hierarchical organization data."
        :componentDocs="docs"
        :apiDocs="['OrganizationChart']"
        :ptTabComponent="PTComponent"
        :themingDocs="ThemingDoc"
    />
</template>

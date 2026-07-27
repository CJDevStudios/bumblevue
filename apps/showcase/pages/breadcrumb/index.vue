<script setup lang="ts">
    import AccessibilityDoc from '@/doc/breadcrumb/AccessibilityDoc.vue';
    import BasicDoc from '@/doc/breadcrumb/BasicDoc.vue';
    import ImportDoc from '@/doc/breadcrumb/ImportDoc.vue';
    import RouterDoc from '@/doc/breadcrumb/RouterDoc.vue';
    import TemplateDoc from '@/doc/breadcrumb/TemplateDoc.vue';
    import PTComponent from '@/doc/breadcrumb/pt/index.vue';
    import ThemingDoc from '@/doc/breadcrumb/theming/index.vue';

    const docs = [
        { id: 'import', label: 'Import', component: ImportDoc },
        { id: 'basic', label: 'Basic', component: BasicDoc },
        { id: 'template', label: 'Template', component: TemplateDoc },
        { id: 'router', label: 'Router', component: RouterDoc },
        { id: 'accessibility', label: 'Accessibility', component: AccessibilityDoc }
    ];
</script>

<template>
    <DocComponent
        title="Vue Breadcrumb Component"
        header="Breadcrumb"
        description="Breadcrumb provides contextual information about page hierarchy."
        :componentDocs="docs"
        :apiDocs="['Breadcrumb', 'MenuItem']"
        :ptTabComponent="PTComponent"
        :themingDocs="ThemingDoc"
    />
</template>

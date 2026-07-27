<script setup lang="ts">
    import AccessibilityDoc from '@/doc/megamenu/AccessibilityDoc.vue';
    import BasicDoc from '@/doc/megamenu/BasicDoc.vue';
    import CommandDoc from '@/doc/megamenu/CommandDoc.vue';
    import ImportDoc from '@/doc/megamenu/ImportDoc.vue';
    import RouterDoc from '@/doc/megamenu/RouterDoc.vue';
    import TemplateDoc from '@/doc/megamenu/TemplateDoc.vue';
    import VerticalDoc from '@/doc/megamenu/VerticalDoc.vue';
    import PTComponent from '@/doc/megamenu/pt/index.vue';
    import ThemingDoc from '@/doc/megamenu/theming/index.vue';

    const docs = [
        { id: 'import', label: 'Import', component: ImportDoc },
        { id: 'basic', label: 'Basic', component: BasicDoc },
        { id: 'vertical', label: 'Vertical', component: VerticalDoc },
        { id: 'template', label: 'Template', component: TemplateDoc },
        { id: 'command', label: 'Command', component: CommandDoc },
        { id: 'router', label: 'Router', component: RouterDoc },
        { id: 'accessibility', label: 'Accessibility', component: AccessibilityDoc }
    ];
</script>

<template>
    <DocComponent
        title="Vue MegaMenu Component"
        header="MegaMenu"
        description="MegaMenu is a navigation component that displays submenus and content in columns."
        :componentDocs="docs"
        :apiDocs="['MegaMenu', 'MenuItem']"
        :ptTabComponent="PTComponent"
        :themingDocs="ThemingDoc"
    />
</template>

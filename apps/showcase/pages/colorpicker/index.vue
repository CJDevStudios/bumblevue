<template>
    <DocComponent title="Vue ColorPicker Component" header="ColorPicker" description="ColorPicker is an input component to select a color." :componentDocs="docs" :apiDocs="['ColorPicker']" :ptTabComponent="PTComponent" :themingDocs="ThemingDoc" />
</template>

<script setup lang="ts">
    import AccessibilityDoc from '@/doc/colorpicker/AccessibilityDoc.vue';
    import BasicDoc from '@/doc/colorpicker/BasicDoc.vue';
    import DisabledDoc from '@/doc/colorpicker/DisabledDoc.vue';
    import FormatDoc from '@/doc/colorpicker/FormatDoc.vue';
    import FormsDoc from '@/doc/colorpicker/FormsDoc.vue';
    import ImportDoc from '@/doc/colorpicker/ImportDoc.vue';
    import InlineDoc from '@/doc/colorpicker/InlineDoc.vue';
    import PTComponent from '@/doc/colorpicker/pt/index.vue';
    import ThemingDoc from '@/doc/colorpicker/theming/index.vue';

    const docs = [
        { id: 'import', label: 'Import', component: ImportDoc },
        { id: 'basic', label: 'Basic', component: BasicDoc },
        { id: 'forms', label: 'Forms', component: FormsDoc },
        { id: 'inline', label: 'Inline', component: InlineDoc },
        { id: 'format', label: 'Format', component: FormatDoc },
        { id: 'disabled', label: 'Disabled', component: DisabledDoc },
        { id: 'accessibility', label: 'Accessibility', component: AccessibilityDoc }
    ];
</script>

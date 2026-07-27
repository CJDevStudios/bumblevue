<script setup lang="ts">
    import AccessibilityDoc from '@/doc/fileupload/AccessibilityDoc.vue';
    import AdvancedDoc from '@/doc/fileupload/AdvancedDoc.vue';
    import AutoDoc from '@/doc/fileupload/AutoDoc.vue';
    import BasicDoc from '@/doc/fileupload/BasicDoc.vue';
    import CustomUploadDoc from '@/doc/fileupload/CustomUploadDoc.vue';
    import ImportDoc from '@/doc/fileupload/ImportDoc.vue';
    import TemplateDoc from '@/doc/fileupload/TemplateDoc.vue';
    import PTComponent from '@/doc/fileupload/pt/index.vue';
    import ThemingDoc from '@/doc/fileupload/theming/index.vue';

    const docs = [
        { id: 'import', label: 'Import', component: ImportDoc },
        { id: 'basic', label: 'Basic', component: BasicDoc },
        { id: 'auto', label: 'Auto', component: AutoDoc },
        { id: 'advanced', label: 'Advanced', component: AdvancedDoc },
        { id: 'template', label: 'Template', component: TemplateDoc },
        { id: 'custom-upload', label: 'Custom Upload', component: CustomUploadDoc },
        { id: 'accessibility', label: 'Accessibility', component: AccessibilityDoc }
    ];
</script>

<template>
    <DocComponent
        title="Vue File Upload Component"
        header="File Upload"
        description="FileUpload is an advanced uploader with dragdrop support, multi file uploads, auto uploading, progress tracking and validations."
        :componentDocs="docs"
        :apiDocs="['FileUpload']"
        :ptTabComponent="PTComponent"
        :themingDocs="ThemingDoc"
    />
</template>

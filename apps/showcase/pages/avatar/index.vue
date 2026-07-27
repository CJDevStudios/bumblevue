<script setup lang="ts">
    import AccessibilityDoc from '@/doc/avatar/AccessibilityDoc.vue';
    import AvatarGroupDoc from '@/doc/avatar/AvatarGroupDoc.vue';
    import IconDoc from '@/doc/avatar/IconDoc.vue';
    import ImageDoc from '@/doc/avatar/ImageDoc.vue';
    import ImportDoc from '@/doc/avatar/ImportDoc.vue';
    import LabelDoc from '@/doc/avatar/LabelDoc.vue';
    import PTComponent from '@/doc/avatar/pt/index.vue';
    import ThemingDoc from '@/doc/avatar/theming/index.vue';

    const docs = [
        { id: 'import', label: 'Import', component: ImportDoc },
        { id: 'label', label: 'Label', component: LabelDoc },
        { id: 'icon', label: 'Icon', component: IconDoc },
        { id: 'image', label: 'Image', component: ImageDoc },
        { id: 'avatargroup', label: 'AvatarGroup', component: AvatarGroupDoc },
        { id: 'accessibility', label: 'Accessibility', component: AccessibilityDoc }
    ];
</script>

<template>
    <DocComponent
        title="Vue Avatar Component"
        header="Avatar"
        description="Avatar represents people using icons, labels and images."
        :componentDocs="docs"
        :apiDocs="['Avatar', 'AvatarGroup']"
        :ptTabComponent="PTComponent"
        :themingDocs="ThemingDoc"
    />
</template>

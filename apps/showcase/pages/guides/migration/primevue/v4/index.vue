<script setup lang="ts">
import DocCopyMarkdown from '@/components/doc/DocCopyMarkdown.vue';
import OverviewDoc from '@/doc/guides/migration/primevue/v4/OverviewDoc.vue';
import BreakingDoc from '@/doc/guides/migration/primevue/v4/BreakingDoc.vue';
import CompatibleDoc from '@/doc/guides/migration/primevue/v4/CompatibleDoc.vue';

const docs = [
    { id: 'overview', label: 'Overview', component: OverviewDoc },
    {
        id: 'changes',
        label: 'Changes',
        description: 'The list of backward-compatible and breaking changes',
        children: [
            { id: 'compatible', label: 'Compatible', component: CompatibleDoc },
            { id: 'breaking', label: 'Breaking', component: BreakingDoc }
        ]
    }
];
</script>

<template>
    <head>
        <title>Migration - BumbleVue</title>
        <meta name="description" content="Migration from PrimeVue v4 to BumbleVue v1." />
    </head>
    <div class="doc">
        <div class="doc-main">
            <div class="doc-intro">
                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                    <div class="flex-1">
                        <h1>Migration</h1>
                        <p>Migration from PrimeVue v4 to BumbleVue v1.</p>
                    </div>
                    <DocCopyMarkdown docType="page" class="flex-shrink-0" />
                </div>
            </div>
            <DocSections :docs="docs" />
        </div>
        <DocSectionNav :docs="docs" />
    </div>
</template>

<style scoped></style>

<script setup lang="ts">
    import DocCopyMarkdown from '@/components/doc/DocCopyMarkdown.vue';
    import ColorDoc from '@/doc/icons/ColorDoc.vue';
    import ImportDoc from '@/doc/icons/ImportDoc.vue';
    import ListDoc from '@/doc/icons/ListDoc.vue';
    import SizeDoc from '@/doc/icons/SizeDoc.vue';
    import SpinDoc from '@/doc/icons/SpinDoc.vue';

    const docs = [
        { id: 'import', label: 'Import', component: ImportDoc },
        { id: 'size', label: 'Size', component: SizeDoc },
        { id: 'color', label: 'Color', component: ColorDoc },
        { id: 'spin', label: 'Spin', component: SpinDoc },
        { id: 'list', label: 'List', component: ListDoc }
    ];
</script>

<template>
    <div>
        <Head>
            <Title>Vue Built-in Icons - BumbleVue</Title>
            <Meta name="description" content="BumbleVue ships a small set of SVG icons used by its components by default. Any other icon library can be used with BumbleVue components via icon properties and templating." />
        </Head>

        <div class="doc">
            <div class="doc-main">
                <div class="doc-intro">
                    <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div class="flex-1">
                            <h1>Built-in Icons</h1>
                            <p>
                                BumbleVue ships a small set of SVG icons used by its components by default. It is not intended to be a general purpose icon library, use the icon library of your choice for your application and with BumbleVue
                                components as described in <NuxtLink to="/customicons">Custom Icons</NuxtLink>.
                            </p>
                        </div>
                        <DocCopyMarkdown docType="page" class="shrink-0" />
                    </div>
                </div>
                <DocSections :docs="docs" />
            </div>
            <DocSectionNav :docs="docs" />
        </div>
    </div>
</template>

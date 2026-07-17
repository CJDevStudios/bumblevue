<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>Popover Theming</h1>
        </div>
        <DocSections :docs="docs" />
    </div>
    <DocSectionNav :docs="docs" />
</template>

<script>
import DocApiTable from '@/components/doc/DocApiTable.vue';
import DocStyledPreset from '@/components/doc/DocStyledPreset.vue';
import { getStyleOptions, getTokenOptions } from '@/components/doc/helpers';

export default {
    data() {
        return {
            docs: [
                {
                    id: 'theming.styled',
                    label: 'Styled',
                    children: [
                        {
                            id: 'theming.classes',
                            label: 'CSS Classes',
                            description: 'List of class names used in the styled mode.',
                            component: DocApiTable,
                            data: getStyleOptions('Popover')
                        },
                        {
                            id: 'theming.tokens',
                            label: 'Design Tokens',
                            description: 'List of design tokens.',
                            component: DocApiTable,
                            data: getTokenOptions('Popover')
                        },
                        {
                            id: 'theming.preset',
                            label: 'Built-in Presets',
                            component: DocStyledPreset,
                            data: 'popover'
                        }
                    ]
                }
            ]
        };
    }
};
</script>

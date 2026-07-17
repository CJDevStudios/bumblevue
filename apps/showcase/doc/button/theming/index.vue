<template>
    <div class="doc-main">
        <div class="doc-intro">
            <h1>Button Theming</h1>
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
                            id: 'theming.classes.button',
                            label: 'Button CSS Classes',
                            description: 'List of class names used in the styled mode.',
                            component: DocApiTable,
                            data: getStyleOptions('Button')
                        },
                        {
                            id: 'theming.classes.buttongroup',
                            label: 'ButtonGroup CSS Classes',
                            description: 'List of class names used in the styled mode.',
                            component: DocApiTable,
                            data: getStyleOptions('ButtonGroup')
                        },
                        {
                            id: 'theming.tokens',
                            label: 'Design Tokens',
                            description: 'List of design tokens.',
                            component: DocApiTable,
                            data: getTokenOptions('Button')
                        },
                        {
                            id: 'theming.preset',
                            label: 'Built-in Presets',
                            component: DocStyledPreset,
                            data: 'button'
                        }
                    ]
                }
            ]
        };
    }
};
</script>

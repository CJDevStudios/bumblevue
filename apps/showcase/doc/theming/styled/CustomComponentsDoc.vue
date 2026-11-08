<script>
    export default {
        data() {
            return {
                code1: {
                    basic: `
<template>
    <button type="button" class="p-button p-component">
        <span class="p-button-label"><slot /></span>
    </button>
</template>

<script>
import BaseComponent from '@cjdevstudios/bumblevue/core/basecomponent';
import ButtonStyle from '@cjdevstudios/bumblevue/button/style';

export default {
    name: 'MyButton',
    extends: BaseComponent,
    style: ButtonStyle
};
<\/script>
`
                },
                code2: {
                    basic: `
import { style } from '@cjdevstudios/bumblevue/button/style';
`
                }
            };
        }
    };
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>
            A custom component can reuse the styled mode CSS of a BumbleVue component by extending <i>BaseComponent</i> and setting the <i>style</i> option to the style module of that component. BaseComponent loads the design token variables and the
            CSS of the style module, and reloads them when the theme, preset or color scheme changes. Apply the same <i>p-</i> classes as the BumbleVue component to the elements of the custom component.
        </p>
        <p>Loading the CSS with <i>loadStyle</i> alone is not sufficient, since the CSS refers to the design token variables of the component which are only defined when its theme is loaded.</p>
    </DocSectionText>
    <DocSectionCode :code="code1" hideToggleCode importCode hideStackBlitz />
    <div class="doc-section-description mt-4">
        <p>The raw CSS of each component is also available as the named <i>style</i> export of its style module, for example to build a new style module on top of an existing one.</p>
    </div>
    <DocSectionCode :code="code2" hideToggleCode importCode hideStackBlitz />
</template>

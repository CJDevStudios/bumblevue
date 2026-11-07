<template>
    <DocSectionText v-bind="$attrs">
        <p>Tailwind utilities may not be able to override the default styling of components due to css specificity, there are two possible solutions; Important and CSS Layer.</p>
        <h3>Important</h3>
        <p>Add the <i>!</i> suffix to a utility to enforce the styling. This is not the recommend approach, and should be used as last resort to avoid adding unnecessary style classes to your bundle.</p>
        <DocSectionCode :code="code1" hideToggleCode hideStackBlitz />

        <h3>CSS Layer</h3>
        <p>CSS Layer provides control over the css specificity so that Tailwind utilities can safely override components.</p>
        <p>Ensure <i>primevue</i> layer is after <i>theme</i> and <i>base</i>, but before the other Tailwind layers such as <i>utilities</i>.</p>
        <DocSectionCode :code="code3" importCode hideToggleCode hideStackBlitz />
        <p>No change in the CSS configuration is required.</p>
        <DocSectionCode :code="code4" importCode hideToggleCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
export default {
    data() {
        return {
            code1: {
                basic: `
<InputText placeholder="Overridden" class="p-8!" />
`
            },
            code3: {
                basic: `
import BumbleVue from '@cjdevstudios/bumblevue/config';
import Aura from '@cjdevstudios/bumblevue/themes/aura';

const app = createApp(App);

app.use(BumbleVue, {
    theme: {
        preset: Aura,
        options: {
            cssLayer: {
                name: 'primevue',
                order: 'theme, base, primevue'
            }
        }
    }
 });
`
            },
            code4: {
                basic: `
@import "tailwindcss";
@import "@cjdevstudios/bumblevue/tailwind.css";
`
            }
        };
    }
};
</script>

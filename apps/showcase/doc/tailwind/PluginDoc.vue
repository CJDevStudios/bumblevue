<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
@import "tailwindcss";
@import "@cjdevstudios/bumblevue/tailwind.css";
`
                }
            };
        }
    };
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>
            BumbleVue ships a Tailwind CSS plugin as part of the <i>@cjdevstudios/bumblevue</i> package to provide first class integration between BumbleVue and Tailwind. It is designed to work both in styled and unstyled modes. In styled mode, for
            instance the semantic colors such as primary and surfaces are provided as Tailwind utilities e.g. <i>bg-primary</i>, <i>text-surface-500</i>, <i>text-muted-color</i>.
        </p>
        <p>
            If you haven't already done so, start by integrating Tailwind into your project. Detailed steps for this process can be found in the Tailwind <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">documentation</a>.
            The plugin requires Tailwind v4, in the CSS file that contains the tailwindcss import, add the plugin import as well.
        </p>
        <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
    </DocSectionText>
</template>

<script>
    export default {
        data() {
            return {
                code1: {
                    basic: `
@layer bootstrap-reboot, primevue;

@import "bootstrap-reboot.css" layer(bootstrap-rebooot);
`
                },
                code2: {
                    basic: `
@layer theme, base, primevue, components, utilities;

@import "tailwindcss";
`
                },
                code3: {
                    basic: `
@layer normalize, primevue;

@import "normalize.css" layer(normalize-reset);
`
                }
            };
        }
    };
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>Example layer configuration for the popular CSS libraries.</p>
    </DocSectionText>
    <h4>Bootstrap</h4>
    <p>Bootstrap has a <i>reboot</i> utility to reset the CSS of the standard elements. If you are including this utility, you may give it a layer while importing it.</p>
    <DocSectionCode :code="code1" hideToggleCode hideStackBlitz />

    <h4>Tailwind</h4>
    <p>
        Tailwind CSS includes a reset utility in base called <a href="https://tailwindcss.com/docs/preflight" target="_blank" rel="noopener noreferrer" class="doc-link">preflight</a>. Tailwind already places its styles in the <i>theme</i>,
        <i>base</i>, <i>components</i> and <i>utilities</i> layers, so define the order of the primevue layer to come after the base and before the utilities.
    </p>
    <DocSectionCode :code="code2" hideToggleCode hideStackBlitz />

    <h4>Normalize</h4>
    <p>Normalize is another utility to reset CSS of the standard elements. While importing the CSS file, assign it to a layer and define the layer order with primevue coming after the normalized layer.</p>
    <DocSectionCode :code="code3" hideToggleCode hideStackBlitz />
</template>

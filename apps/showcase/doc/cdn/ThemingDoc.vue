<template>
    <DocSectionText v-bind="$attrs">
        <p>Include the theme preset via a script element after adding PrimeVue, valid options are Aura, Lara, Nora and Material.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
<!-- <script src="https://unpkg.com/@cjdevstudios/bumbleuix-themes/umd/{preset}.js"><\/script> -->

<script src="https://unpkg.com/@cjdevstudios/bumbleuix-themes/umd/aura.js"><\/script>
<script src="https://unpkg.com/@cjdevstudios/bumbleuix-themes/umd/lara.js"><\/script>
<script src="https://unpkg.com/@cjdevstudios/bumbleuix-themes/umd/nora.js"><\/script>
<script src="https://unpkg.com/@cjdevstudios/bumbleuix-themes/umd/material.js"><\/script>
`
            }
        };
    }
};
</script>

<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
<!-- <script src="https://unpkg.com/@cjdevstudios/bumblevue/umd/themes/{preset}.min.js"><\/script> -->

<script src="https://unpkg.com/@cjdevstudios/bumblevue/umd/themes/aura.min.js"><\/script>
<script src="https://unpkg.com/@cjdevstudios/bumblevue/umd/themes/lara.min.js"><\/script>
<script src="https://unpkg.com/@cjdevstudios/bumblevue/umd/themes/nora.min.js"><\/script>
<script src="https://unpkg.com/@cjdevstudios/bumblevue/umd/themes/material.min.js"><\/script>
`
                }
            };
        }
    };
</script>

<template>
    <DocSectionText v-bind="$attrs">
        <p>Include the theme preset via a script element after adding BumbleVue, valid options are Aura, Lara, Nora and Material.</p>
    </DocSectionText>
    <DocSectionCode :code="code" hideToggleCode hideStackBlitz />
</template>

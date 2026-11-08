<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import ScrollTop from '@cjdevstudios/bumblevue/scrolltop';
`
                }
            };
        }
    };
</script>

<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

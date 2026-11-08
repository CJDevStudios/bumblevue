<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import MegaMenu from '@cjdevstudios/bumblevue/megamenu';
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

<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import ScrollPanel from '@cjdevstudios/bumblevue/scrollpanel';
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

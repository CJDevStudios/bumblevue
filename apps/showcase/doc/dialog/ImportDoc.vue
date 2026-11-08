<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import Dialog from '@cjdevstudios/bumblevue/dialog';
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

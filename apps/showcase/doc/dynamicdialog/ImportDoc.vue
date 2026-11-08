<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import DynamicDialog from '@cjdevstudios/bumblevue/dynamicdialog';
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

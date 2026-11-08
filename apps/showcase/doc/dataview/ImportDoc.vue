<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import DataView from '@cjdevstudios/bumblevue/dataview';
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

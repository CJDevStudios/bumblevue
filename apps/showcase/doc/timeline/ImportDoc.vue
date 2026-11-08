<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import Timeline from '@cjdevstudios/bumblevue/timeline';
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

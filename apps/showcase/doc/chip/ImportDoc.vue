<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import Chip from '@cjdevstudios/bumblevue/chip';
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

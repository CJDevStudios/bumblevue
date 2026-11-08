<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import Rating from '@cjdevstudios/bumblevue/rating';
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

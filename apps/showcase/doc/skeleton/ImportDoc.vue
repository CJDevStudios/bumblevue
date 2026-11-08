<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import Skeleton from '@cjdevstudios/bumblevue/skeleton';
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

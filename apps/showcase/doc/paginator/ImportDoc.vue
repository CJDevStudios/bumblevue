<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import Paginator from '@cjdevstudios/bumblevue/paginator';
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

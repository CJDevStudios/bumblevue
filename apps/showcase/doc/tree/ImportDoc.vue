<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import Tree from '@cjdevstudios/bumblevue/tree';
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

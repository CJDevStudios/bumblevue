<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import TreeSelect from '@cjdevstudios/bumblevue/treeselect';
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

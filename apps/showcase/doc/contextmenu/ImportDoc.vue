<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import ContextMenu from '@cjdevstudios/bumblevue/contextmenu';
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

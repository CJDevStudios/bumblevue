<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import Drawer from '@cjdevstudios/bumblevue/drawer';
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

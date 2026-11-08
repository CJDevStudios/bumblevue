<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import PanelMenu from '@cjdevstudios/bumblevue/panelmenu';
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

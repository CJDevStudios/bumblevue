<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import Fluid from '@cjdevstudios/bumblevue/fluid';
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

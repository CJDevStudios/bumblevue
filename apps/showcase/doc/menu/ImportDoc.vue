<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import Menu from '@cjdevstudios/bumblevue/menu';
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

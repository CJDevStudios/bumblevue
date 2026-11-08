<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import Menubar from '@cjdevstudios/bumblevue/menubar';
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

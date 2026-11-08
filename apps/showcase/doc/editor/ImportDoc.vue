<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import Editor from '@cjdevstudios/bumblevue/editor';
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

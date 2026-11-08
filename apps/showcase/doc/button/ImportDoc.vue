<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import Button from '@cjdevstudios/bumblevue/button';
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

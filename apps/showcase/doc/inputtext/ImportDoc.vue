<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import InputText from '@cjdevstudios/bumblevue/inputtext';
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

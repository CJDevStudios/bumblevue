<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import MultiSelect from '@cjdevstudios/bumblevue/multiselect';
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

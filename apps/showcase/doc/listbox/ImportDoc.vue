<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import Listbox from '@cjdevstudios/bumblevue/listbox';
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

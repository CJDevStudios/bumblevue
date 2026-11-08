<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import DatePicker from '@cjdevstudios/bumblevue/datepicker';
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

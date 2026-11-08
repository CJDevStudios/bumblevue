<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import SelectButton from '@cjdevstudios/bumblevue/selectbutton';
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

<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import InputNumber from '@cjdevstudios/bumblevue/inputnumber';
`
                }
            };
        }
    };
</script>

<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

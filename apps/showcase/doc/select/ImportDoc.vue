<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import Select from '@cjdevstudios/bumblevue/select';
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

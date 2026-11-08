<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import AutoComplete from '@cjdevstudios/bumblevue/autocomplete';
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

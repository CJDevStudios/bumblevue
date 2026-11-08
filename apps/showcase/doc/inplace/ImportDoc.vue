<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import Inplace from '@cjdevstudios/bumblevue/inplace';
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

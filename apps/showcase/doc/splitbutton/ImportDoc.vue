<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import SplitButton from '@cjdevstudios/bumblevue/splitbutton';
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

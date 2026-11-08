<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import BlockUI from '@cjdevstudios/bumblevue/blockui';
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

<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import VirtualScroller from '@cjdevstudios/bumblevue/virtualscroller';
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

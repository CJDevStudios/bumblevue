<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import ProgressBar from '@cjdevstudios/bumblevue/progressbar';
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

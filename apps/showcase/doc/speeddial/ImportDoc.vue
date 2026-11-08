<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import SpeedDial from '@cjdevstudios/bumblevue/speeddial';
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

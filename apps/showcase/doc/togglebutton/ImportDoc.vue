<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import ToggleButton from '@cjdevstudios/bumblevue/togglebutton';
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

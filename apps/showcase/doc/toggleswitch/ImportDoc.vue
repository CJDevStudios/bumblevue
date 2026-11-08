<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import ToggleSwitch from '@cjdevstudios/bumblevue/toggleswitch';
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

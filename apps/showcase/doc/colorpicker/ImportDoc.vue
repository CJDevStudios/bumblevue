<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import ColorPicker from '@cjdevstudios/bumblevue/colorpicker';
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

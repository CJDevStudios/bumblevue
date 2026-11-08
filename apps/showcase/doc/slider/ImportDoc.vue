<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import Slider from '@cjdevstudios/bumblevue/slider';
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

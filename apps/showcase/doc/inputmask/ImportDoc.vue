<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import InputMask from '@cjdevstudios/bumblevue/inputmask';
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

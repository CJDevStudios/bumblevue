<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import InputOtp from '@cjdevstudios/bumblevue/inputotp';
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

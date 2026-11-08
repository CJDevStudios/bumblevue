<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import ConfirmPopup from '@cjdevstudios/bumblevue/confirmpopup';
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

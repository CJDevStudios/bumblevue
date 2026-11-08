<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import ConfirmDialog from '@cjdevstudios/bumblevue/confirmdialog';
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

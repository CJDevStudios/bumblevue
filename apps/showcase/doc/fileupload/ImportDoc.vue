<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import FileUpload from '@cjdevstudios/bumblevue/fileupload';
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

<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import Image from '@cjdevstudios/bumblevue/image';
`
                }
            };
        }
    };
</script>

<template>
    <DocSectionText v-bind="$attrs"></DocSectionText>
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

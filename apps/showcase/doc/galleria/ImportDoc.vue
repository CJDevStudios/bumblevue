<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import Galleria from '@cjdevstudios/bumblevue/galleria';
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

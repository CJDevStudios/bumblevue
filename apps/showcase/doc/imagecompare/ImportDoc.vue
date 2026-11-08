<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import ImageCompare from '@cjdevstudios/bumblevue/imagecompare';
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

<template>
    <DocSectionText v-bind="$attrs" />
    <DocSectionCode :code="code" hideToggleCode importCode hideStackBlitz />
</template>

<script>
export default {
    data() {
        return {
            code: {
                basic: `
import InputGroup from '@cjdevstudios/bumblevue/inputgroup';
import InputGroupAddon from '@cjdevstudios/bumblevue/inputgroupaddon';
`
            }
        };
    }
};
</script>

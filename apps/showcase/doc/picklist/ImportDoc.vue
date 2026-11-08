<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import PickList from '@cjdevstudios/bumblevue/picklist';
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

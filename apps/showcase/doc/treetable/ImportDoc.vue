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
import TreeTable from '@cjdevstudios/bumblevue/treetable';
import Column from '@cjdevstudios/bumblevue/column';
`
            }
        };
    }
};
</script>

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
import DataTable from '@cjdevstudios/bumblevue/datatable';
import Column from '@cjdevstudios/bumblevue/column';
import ColumnGroup from '@cjdevstudios/bumblevue/columngroup';   // optional
import Row from '@cjdevstudios/bumblevue/row';                   // optional
`
            }
        };
    }
};
</script>

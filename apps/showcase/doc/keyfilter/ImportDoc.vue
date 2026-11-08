<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import KeyFilter from '@cjdevstudios/bumblevue/keyfilter';

app.directive('keyfilter', KeyFilter);
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

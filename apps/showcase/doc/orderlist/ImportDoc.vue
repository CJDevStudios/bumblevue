<script>
    export default {
        data() {
            return {
                code: {
                    basic: `
import OrderList from '@cjdevstudios/bumblevue/orderlist';
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

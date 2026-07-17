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
import IconField from '@cjdevstudios/bumblevue/iconfield';
import InputIcon from '@cjdevstudios/bumblevue/inputicon';
`
            }
        };
    }
};
</script>

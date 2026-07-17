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
import Checkbox from '@cjdevstudios/bumblevue/checkbox';
import CheckboxGroup from '@cjdevstudios/bumblevue/checkboxgroup';
`
            }
        };
    }
};
</script>

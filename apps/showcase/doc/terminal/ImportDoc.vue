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
import Terminal from '@cjdevstudios/bumblevue/terminal';
import TerminalService from '@cjdevstudios/bumblevue/terminalservice'
`
            }
        };
    }
};
</script>

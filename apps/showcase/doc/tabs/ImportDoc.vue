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
import Tabs from '@cjdevstudios/bumblevue/tabs';
import TabList from '@cjdevstudios/bumblevue/tablist';
import Tab from '@cjdevstudios/bumblevue/tab';
import TabPanels from '@cjdevstudios/bumblevue/tabpanels';
import TabPanel from '@cjdevstudios/bumblevue/tabpanel';
`
            }
        };
    }
};
</script>

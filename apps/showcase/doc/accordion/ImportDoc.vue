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
import Accordion from '@cjdevstudios/bumblevue/accordion';
import AccordionPanel from '@cjdevstudios/bumblevue/accordionpanel';
import AccordionHeader from '@cjdevstudios/bumblevue/accordionheader';
import AccordionContent from '@cjdevstudios/bumblevue/accordioncontent';
`
            }
        };
    }
};
</script>

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
import Stepper from '@cjdevstudios/bumblevue/stepper';
import StepList from '@cjdevstudios/bumblevue/steplist';
import StepPanels from '@cjdevstudios/bumblevue/steppanels';
import StepItem from '@cjdevstudios/bumblevue/stepitem';
import Step from '@cjdevstudios/bumblevue/step';
import StepPanel from '@cjdevstudios/bumblevue/steppanel';
`
            }
        };
    }
};
</script>

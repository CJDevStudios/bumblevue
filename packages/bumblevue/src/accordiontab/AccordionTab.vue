<template>
    <slot></slot>
</template>

<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import AccordionTabStyle from '@cjdevstudios/bumblevue/accordiontab/style';

export default {
    name: 'AccordionTab',
    extends: BaseComponent,
    inheritAttrs: false,
    props: {
        header: null,
        headerStyle: null,
        headerClass: null,
        headerProps: null,
        headerActionProps: null,
        contentStyle: null,
        contentClass: null,
        contentProps: null,
        disabled: Boolean
    },
    style: AccordionTabStyle,
    provide() {
        return {
            $pcAccordionTab: this,
            $parentInstance: this
        };
    },
    mounted() {
        console.warn('Deprecated since v4. Use the new structure of Accordion instead.');
    }
};
</script>

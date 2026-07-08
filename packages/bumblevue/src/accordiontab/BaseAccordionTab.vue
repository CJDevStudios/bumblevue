<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import AccordionTabStyle from '@cjdevstudios/bumblevue/accordiontab/style';

export default {
    name: 'BaseAccordionTab',
    extends: BaseComponent,
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
    }
};
</script>

<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import AccordionHeaderStyle from '@cjdevstudios/bumblevue/accordionheader/style';

export default {
    name: 'BaseAccordionHeader',
    extends: BaseComponent,
    props: {
        as: {
            type: [String, Object],
            default: 'BUTTON'
        },
        asChild: {
            type: Boolean,
            default: false
        }
    },
    style: AccordionHeaderStyle,
    provide() {
        return {
            $pcAccordionHeader: this,
            $parentInstance: this
        };
    }
};
</script>

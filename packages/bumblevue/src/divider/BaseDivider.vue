<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import DividerStyle from '@cjdevstudios/bumblevue/divider/style';

export default {
    name: 'BaseDivider',
    extends: BaseComponent,
    props: {
        align: {
            type: String,
            default: null
        },
        layout: {
            type: String,
            default: 'horizontal'
        },
        type: {
            type: String,
            default: 'solid'
        }
    },
    style: DividerStyle,
    provide() {
        return {
            $pcDivider: this,
            $parentInstance: this
        };
    }
};
</script>

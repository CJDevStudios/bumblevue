<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import StepItemStyle from '@cjdevstudios/bumblevue/stepitem/style';

export default {
    name: 'BaseStepItem',
    extends: BaseComponent,
    props: {
        value: {
            type: [String, Number],
            default: undefined
        }
    },
    style: StepItemStyle,
    provide() {
        return {
            $pcStepItem: this,
            $parentInstance: this
        };
    }
};
</script>

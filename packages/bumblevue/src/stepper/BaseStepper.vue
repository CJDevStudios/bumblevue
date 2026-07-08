<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import StepperStyle from '@cjdevstudios/bumblevue/stepper/style';

export default {
    name: 'BaseStepper',
    extends: BaseComponent,
    props: {
        value: {
            type: [String, Number],
            default: undefined
        },
        linear: {
            type: Boolean,
            default: false
        }
    },
    style: StepperStyle,
    provide() {
        return {
            $pcStepper: this,
            $parentInstance: this,
            $pcStepItem: null
        };
    }
};
</script>

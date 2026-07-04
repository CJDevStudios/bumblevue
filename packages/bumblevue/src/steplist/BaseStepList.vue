<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import StepListStyle from '@cjdevstudios/bumblevue/steplist/style';

export default {
    name: 'BaseStepList',
    extends: BaseComponent,
    style: StepListStyle,
    provide() {
        return {
            $pcStepList: this,
            $parentInstance: this
        };
    }
};
</script>

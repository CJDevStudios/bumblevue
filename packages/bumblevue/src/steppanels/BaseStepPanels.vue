<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import StepPanelsStyle from '@cjdevstudios/bumblevue/steppanels/style';

export default {
    name: 'BaseStepPanels',
    extends: BaseComponent,
    style: StepPanelsStyle,
    provide() {
        return {
            $pcStepPanels: this,
            $parentInstance: this
        };
    }
};
</script>

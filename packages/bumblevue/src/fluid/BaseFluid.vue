<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import FluidStyle from '@cjdevstudios/bumblevue/fluid/style';

export default {
    name: 'BaseFluid',
    extends: BaseComponent,
    style: FluidStyle,
    provide() {
        return {
            $pcFluid: this,
            $parentInstance: this
        };
    }
};
</script>

<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import IftaLabelStyle from '@cjdevstudios/bumblevue/iftalabel/style';

export default {
    name: 'BaseIftaLabel',
    extends: BaseComponent,
    style: IftaLabelStyle,
    provide() {
        return {
            $pcIftaLabel: this,
            $parentInstance: this
        };
    }
};
</script>

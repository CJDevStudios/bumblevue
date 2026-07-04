<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import ButtonGroupStyle from '@cjdevstudios/bumblevue/buttongroup/style';

export default {
    name: 'BaseButtonGroup',
    extends: BaseComponent,
    style: ButtonGroupStyle,
    provide() {
        return {
            $pcButtonGroup: this,
            $parentInstance: this
        };
    }
};
</script>

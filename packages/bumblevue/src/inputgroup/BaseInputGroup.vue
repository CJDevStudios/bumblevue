<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import InputGroupStyle from '@cjdevstudios/bumblevue/inputgroup/style';

export default {
    name: 'BaseInputGroup',
    extends: BaseComponent,
    style: InputGroupStyle,
    provide() {
        return {
            $pcInputGroup: this,
            $parentInstance: this
        };
    }
};
</script>

<script>
import BaseEditableHolder from '@cjdevstudios/bumblevue-core/baseeditableholder';
import RadioButtonGroupStyle from '@cjdevstudios/bumblevue/radiobuttongroup/style';

export default {
    name: 'BaseRadioButtonGroup',
    extends: BaseEditableHolder,
    style: RadioButtonGroupStyle,
    provide() {
        return {
            $pcRadioButtonGroup: this,
            $parentInstance: this
        };
    }
};
</script>

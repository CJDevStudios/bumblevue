<script>
import BaseInput from '@cjdevstudios/bumblevue-core/baseinput';
import InputTextStyle from '@cjdevstudios/bumblevue/inputtext/style';

export default {
    name: 'BaseInputText',
    extends: BaseInput,
    style: InputTextStyle,
    provide() {
        return {
            $pcInputText: this,
            $parentInstance: this
        };
    }
};
</script>

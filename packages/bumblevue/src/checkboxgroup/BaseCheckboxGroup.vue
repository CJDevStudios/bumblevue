<script>
import BaseEditableHolder from '@cjdevstudios/bumblevue-core/baseeditableholder';
import CheckboxGroupStyle from '@cjdevstudios/bumblevue/checkboxgroup/style';

export default {
    name: 'BaseCheckboxGroup',
    extends: BaseEditableHolder,
    style: CheckboxGroupStyle,
    provide() {
        return {
            $pcCheckboxGroup: this,
            $parentInstance: this
        };
    }
};
</script>

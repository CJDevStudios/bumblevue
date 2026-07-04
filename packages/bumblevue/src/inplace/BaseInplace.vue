<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import InplaceStyle from '@cjdevstudios/bumblevue/inplace/style';

export default {
    name: 'BaseInplace',
    extends: BaseComponent,
    props: {
        active: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        displayProps: {
            type: null,
            default: null
        }
    },
    style: InplaceStyle,
    provide() {
        return {
            $pcInplace: this,
            $parentInstance: this
        };
    }
};
</script>

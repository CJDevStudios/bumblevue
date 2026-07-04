<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import FloatLabelStyle from '@cjdevstudios/bumblevue/floatlabel/style';

export default {
    name: 'BaseFloatLabel',
    extends: BaseComponent,
    props: {
        variant: {
            type: String,
            default: 'over'
        }
    },
    style: FloatLabelStyle,
    provide() {
        return {
            $pcFloatLabel: this,
            $parentInstance: this
        };
    }
};
</script>

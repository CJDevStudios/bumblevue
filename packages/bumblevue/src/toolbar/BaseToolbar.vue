<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import ToolbarStyle from '@cjdevstudios/bumblevue/toolbar/style';

export default {
    name: 'BaseToolbar',
    extends: BaseComponent,
    props: {
        ariaLabelledby: {
            type: String,
            default: null
        }
    },
    style: ToolbarStyle,
    provide() {
        return {
            $pcToolbar: this,
            $parentInstance: this
        };
    }
};
</script>

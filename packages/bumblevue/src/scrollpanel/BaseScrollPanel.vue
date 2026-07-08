<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import ScrollPanelStyle from '@cjdevstudios/bumblevue/scrollpanel/style';

export default {
    name: 'BaseScrollPanel',
    extends: BaseComponent,
    props: {
        step: {
            type: Number,
            default: 5
        }
    },
    style: ScrollPanelStyle,
    provide() {
        return {
            $pcScrollPanel: this,
            $parentInstance: this
        };
    }
};
</script>

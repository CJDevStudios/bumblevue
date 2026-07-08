<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import BlockUIStyle from '@cjdevstudios/bumblevue/blockui/style';

export default {
    name: 'BaseBlockUI',
    extends: BaseComponent,
    props: {
        blocked: {
            type: Boolean,
            default: false
        },
        fullScreen: {
            type: Boolean,
            default: false
        },
        baseZIndex: {
            type: Number,
            default: 0
        },
        autoZIndex: {
            type: Boolean,
            default: true
        }
    },
    style: BlockUIStyle,
    provide() {
        return {
            $pcBlockUI: this,
            $parentInstance: this
        };
    }
};
</script>

<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import ChipStyle from '@cjdevstudios/bumblevue/chip/style';

export default {
    name: 'BaseChip',
    extends: BaseComponent,
    props: {
        label: {
            type: [String, Number],
            default: null
        },
        icon: {
            type: String,
            default: null
        },
        image: {
            type: String,
            default: null
        },
        removable: {
            type: Boolean,
            default: false
        },
        removeIcon: {
            type: String,
            default: undefined
        }
    },
    style: ChipStyle,
    provide() {
        return {
            $pcChip: this,
            $parentInstance: this
        };
    }
};
</script>

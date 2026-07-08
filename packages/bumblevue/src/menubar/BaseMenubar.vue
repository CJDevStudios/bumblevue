<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import MenubarStyle from '@cjdevstudios/bumblevue/menubar/style';

export default {
    name: 'BaseMenubar',
    extends: BaseComponent,
    props: {
        model: {
            type: Array,
            default: null
        },
        buttonProps: {
            type: null,
            default: null
        },
        breakpoint: {
            type: String,
            default: '960px'
        },
        ariaLabelledby: {
            type: String,
            default: null
        },
        ariaLabel: {
            type: String,
            default: null
        }
    },
    style: MenubarStyle,
    provide() {
        return {
            $pcMenubar: this,
            $parentInstance: this
        };
    }
};
</script>

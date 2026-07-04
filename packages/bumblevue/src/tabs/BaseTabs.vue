<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import TabsStyle from '@cjdevstudios/bumblevue/tabs/style';

export default {
    name: 'BaseTabs',
    extends: BaseComponent,
    props: {
        value: {
            type: [String, Number],
            default: undefined
        },
        lazy: {
            type: Boolean,
            default: false
        },
        scrollable: {
            type: Boolean,
            default: false
        },
        showNavigators: {
            type: Boolean,
            default: true
        },
        tabindex: {
            type: Number,
            default: 0
        },
        selectOnFocus: {
            type: Boolean,
            default: false
        }
    },
    style: TabsStyle,
    provide() {
        return {
            $pcTabs: this,
            $parentInstance: this
        };
    }
};
</script>

<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import TagStyle from '@cjdevstudios/bumblevue/tag/style';

export default {
    name: 'BaseTag',
    extends: BaseComponent,
    props: {
        value: null,
        severity: null,
        rounded: Boolean,
        icon: String
    },
    style: TagStyle,
    provide() {
        return {
            $pcTag: this,
            $parentInstance: this
        };
    }
};
</script>

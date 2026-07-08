<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import ColumnGroupStyle from '@cjdevstudios/bumblevue/columngroup/style';

export default {
    name: 'BaseColumnGroup',
    extends: BaseComponent,
    props: {
        type: {
            type: String,
            default: null
        }
    },
    style: ColumnGroupStyle,
    provide() {
        return {
            $pcColumnGroup: this,
            $parentInstance: this
        };
    }
};
</script>

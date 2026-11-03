<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import ColumnGroupStyle from '@cjdevstudios/bumblevue/columngroup/style';

export default {
    name: 'ColumnGroup',
    extends: BaseComponent,
    inheritAttrs: false,
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
    },
    inject: ['$columnGroups'],
    mounted() {
        this.$columnGroups?.add(this.$);
    },
    unmounted() {
        this.$columnGroups?.delete(this.$);
    },
    render() {
        return null;
    }
};
</script>

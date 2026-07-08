<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import TabListStyle from '@cjdevstudios/bumblevue/tablist/style';

export default {
    name: 'BaseTabList',
    extends: BaseComponent,
    props: {},
    style: TabListStyle,
    provide() {
        return {
            $pcTabList: this,
            $parentInstance: this
        };
    }
};
</script>

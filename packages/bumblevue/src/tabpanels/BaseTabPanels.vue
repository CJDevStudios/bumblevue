<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import TabPanelsStyle from '@cjdevstudios/bumblevue/tabpanels/style';

export default {
    name: 'BaseTabPanels',
    extends: BaseComponent,
    props: {},
    style: TabPanelsStyle,
    provide() {
        return {
            $pcTabPanels: this,
            $parentInstance: this
        };
    }
};
</script>

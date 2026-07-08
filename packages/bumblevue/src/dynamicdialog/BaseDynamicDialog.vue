<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import DynamicDialogStyle from '@cjdevstudios/bumblevue/dynamicdialog/style';

export default {
    name: 'BaseDynamicDialog',
    extends: BaseComponent,
    props: {},
    style: DynamicDialogStyle,
    provide() {
        return {
            $pcDynamicDialog: this,
            $parentInstance: this
        };
    }
};
</script>

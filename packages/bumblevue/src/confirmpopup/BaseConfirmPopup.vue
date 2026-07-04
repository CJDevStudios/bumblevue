<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import ConfirmPopupStyle from '@cjdevstudios/bumblevue/confirmpopup/style';

export default {
    name: 'BaseConfirmPopup',
    extends: BaseComponent,
    props: {
        group: String
    },
    style: ConfirmPopupStyle,
    provide() {
        return {
            $pcConfirmPopup: this,
            $parentInstance: this
        };
    }
};
</script>

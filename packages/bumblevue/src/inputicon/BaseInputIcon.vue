<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import InputIconStyle from '@cjdevstudios/bumblevue/inputicon/style';

export default {
    name: 'BaseInputIcon',
    extends: BaseComponent,
    style: InputIconStyle,
    props: {
        class: null
    },
    provide() {
        return {
            $pcInputIcon: this,
            $parentInstance: this
        };
    }
};
</script>

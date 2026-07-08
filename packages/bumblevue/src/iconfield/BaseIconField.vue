<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import IconFieldStyle from '@cjdevstudios/bumblevue/iconfield/style';

export default {
    name: 'BaseIconField',
    extends: BaseComponent,
    style: IconFieldStyle,
    provide() {
        return {
            $pcIconField: this,
            $parentInstance: this
        };
    }
};
</script>

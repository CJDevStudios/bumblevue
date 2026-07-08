<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import InputGroupAddonStyle from '@cjdevstudios/bumblevue/inputgroupaddon/style';

export default {
    name: 'BaseInputGroupAddon',
    extends: BaseComponent,
    style: InputGroupAddonStyle,
    provide() {
        return {
            $pcInputGroupAddon: this,
            $parentInstance: this
        };
    }
};
</script>

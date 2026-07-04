<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import AvatarGroupStyle from '@cjdevstudios/bumblevue/avatargroup/style';

export default {
    name: 'BaseAvatarGroup',
    extends: BaseComponent,
    style: AvatarGroupStyle,
    provide() {
        return {
            $pcAvatarGroup: this,
            $parentInstance: this
        };
    }
};
</script>

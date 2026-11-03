<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <slot></slot>
    </div>
</template>

<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import AvatarGroupStyle from '@cjdevstudios/bumblevue/avatargroup/style';

export default {
    name: 'AvatarGroup',
    extends: BaseComponent,
    inheritAttrs: false,
    style: AvatarGroupStyle,
    provide() {
        return {
            $pcAvatarGroup: this,
            $parentInstance: this
        };
    }
};
</script>

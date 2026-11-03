<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <slot />
    </div>
</template>

<script>
import BaseComponent from '@cjdevstudios/bumblevue-core/basecomponent';
import InputGroupAddonStyle from '@cjdevstudios/bumblevue/inputgroupaddon/style';

export default {
    name: 'InputGroupAddon',
    extends: BaseComponent,
    inheritAttrs: false,
    style: InputGroupAddonStyle,
    provide() {
        return {
            $pcInputGroupAddon: this,
            $parentInstance: this
        };
    }
};
</script>

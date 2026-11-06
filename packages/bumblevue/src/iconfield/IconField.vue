<template>
    <div :class="cx('root')" v-bind="ptmi('root')">
        <slot />
    </div>
</template>

<script>
import BaseComponent from '@cjdevstudios/bumblevue/core/basecomponent';
import IconFieldStyle from '@cjdevstudios/bumblevue/iconfield/style';

export default {
    name: 'IconField',
    extends: BaseComponent,
    inheritAttrs: false,
    style: IconFieldStyle,
    provide() {
        return {
            $pcIconField: this,
            $parentInstance: this
        };
    }
};
</script>
